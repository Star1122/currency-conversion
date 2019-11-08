import axios from 'axios';

import config from 'config';

const http = axios.create({ baseURL: `${config.baseURL}/` });

function get(url, headers = {}, params = {}) {
  return http.get(url, {
    ...params,
    headers,
  });
}

function post(url, data, headers = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers,
  });
}

function put(url, data, headers = {}) {
  return http.put(url, data, { headers });
}

function remove(url, data, headers = {}) {
  return http.delete(url, {
    headers,
    data,
  });
}

export default {
  http,
  get,
  post,
  put,
  remove,
};
