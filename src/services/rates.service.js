import httpService from './http.service';

const fetch = () => httpService
  .get('/rates')
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const fetchCurrencies = () => httpService
  .get('/rates/currencies')
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

export default {
  fetch,
  fetchCurrencies,
};
