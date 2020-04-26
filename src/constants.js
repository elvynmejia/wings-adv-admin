const API_ROOT = process.env.REACT_APP_API_ROOT;

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Wings-Mode': 'test',
};

const AUTH_TOKEN_NAME = 'authenticationToken';

export { API_ROOT, HEADERS, AUTH_TOKEN_NAME };