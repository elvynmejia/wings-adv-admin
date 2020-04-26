import { API_ROOT, HEADERS, AUTH_TOKEN_NAME } from './constants'

const authProvider = {
  login: ({ email, password }) => {
    return fetch(`${API_ROOT}/v1/authenticate`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ authentication_token }) =>
        localStorage.setItem(AUTH_TOKEN_NAME, authentication_token)
      )
  },
  logout: () => {
    localStorage.removeItem(AUTH_TOKEN_NAME);
    return Promise.resolve()
  },
  checkAuth: () => {
    return localStorage.getItem(AUTH_TOKEN_NAME)
      ? Promise.resolve()
      : Promise.reject()
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem(AUTH_TOKEN_NAME);
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // no granular permissions needed
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;