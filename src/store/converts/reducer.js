import actionTypes from './types';

const INITIAL_STATE = {
  isFetching: false,

  stats: {},

  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STATS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stats: action.payload.data,
      };
    case actionTypes.FETCH_STATS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
