import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import convertsData from './converts/reducer';
import ratesData from './rates/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  convertsData,
  ratesData,
});
