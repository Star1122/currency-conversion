import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import convertsData from './converts/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  convertsData,
});
