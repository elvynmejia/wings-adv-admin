import { API_ROOT, HEADERS } from './constants'

const authProvider = {
  login: ({ email, password }) => {
    return fetch(`${API_ROOT}/v1/authenticate`, {
      method: "POST",
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
        localStorage.setItem("authenticationToken", authentication_token)
      )
  },
  logout: (params) => Promise.resolve(),
  checkAuth: (params) => Promise.resolve(),
  // checkError: (params) => Promise.resolve(),
  checkError: (error) => {
    // const status = error.status;
    // if (status === 401 || status === 403) {
    //   localStorage.removeItem("token");
    //   return Promise.reject();
    // }
    // return Promise.resolve();
    console.log('====================== wtf ======================');
  },
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;