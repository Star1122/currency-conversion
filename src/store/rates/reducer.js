import actionTypes from './types';

const INITIAL_STATE = {
  isFetching: false,
  isFetchingCurrencies: false,

  rates: {},
  currencies: [],

  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RATES:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_RATES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rates: action.payload.data,
      };
    case actionTypes.FETCH_RATES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    case actionTypes.FETCH_CURRENCIES:
      return {
        ...state,
        isFetchingCurrencies: true,
      };
    case actionTypes.FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        isFetchingCurrencies: false,
        currencies: action.payload.data,
      };
    case actionTypes.FETCH_CURRENCIES_FAIL:
      return {
        ...state,
        isFetchingCurrencies: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
