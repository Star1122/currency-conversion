export default {
  env: process.env.NODE_ENV,
  baseURL: process.env.REACT_APP_API,

  WS: {
    HOST: process.env.REACT_APP_WS_HOST,
    PORT: process.env.REACT_APP_WS_PORT,
  },
};
