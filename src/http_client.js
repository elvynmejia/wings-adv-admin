import { fetchUtils } from "react-admin";
import { HEADERS } from "./constants";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ ...HEADERS });
  }
  const token = localStorage.getItem("authenticationToken");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

export default httpClient;