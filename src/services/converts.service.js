import httpService from './http.service';

const fetchStats = () => httpService
  .get('/convert/stats')
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

const convert = (convertData) => httpService
  .post('/convert', convertData)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response.data));

export default {
  fetchStats,
  convert,
};
