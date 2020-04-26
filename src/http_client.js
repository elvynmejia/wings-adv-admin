import { fetchUtils } from 'react-admin';
import { HEADERS, AUTH_TOKEN_NAME } from './constants';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ ...HEADERS });
  }
  const token = localStorage.getItem(AUTH_TOKEN_NAME);
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

export default httpClient;