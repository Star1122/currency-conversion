import actionTypes from './types';

const INITIAL_STATE = {
  isFetching: false,
  isConverting: false,

  stats: {},
  converted: null,

  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_STATS:
      return {
        ...state,
        stats: action.payload.data,
      };

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

    case actionTypes.CONVERT:
      return {
        ...state,
        isConverting: true,
        converted: null,
      };
    case actionTypes.CONVERT_SUCCESS:
      return {
        ...state,
        isConverting: false,
        converted: action.payload.data,
      };
    case actionTypes.CONVERT_FAIL:
      return {
        ...state,
        isConverting: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
