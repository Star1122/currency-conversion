import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import * as History from 'history';
import thunk from 'redux-thunk';

import config from 'config';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];

export const history = History.createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

if (config.env === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(rootReducer(history), initialState, composedEnhancers);

export default store;
