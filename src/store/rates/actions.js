import ratesService from 'services/rates.service';
import types from './types';

export const fetchRates = () => (dispatch, getState) => {
  if (getState().ratesData.isFetching) {
    return Promise.reject();
  }

  dispatch({
    type: types.FETCH_RATES,
  });

  return ratesService.fetch()
    .then((data) => {
      dispatch({
        type: types.FETCH_RATES_SUCCESS,
        payload: { data },
      });

      return true;
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_RATES_FAIL,
        payload: { error },
      });

      throw error;
    });
};

export const fetchCurrencies = () => (dispatch, getState) => {
  if (getState().ratesData.isFetchingCurrencies) {
    return Promise.reject();
  }

  dispatch({
    type: types.FETCH_CURRENCIES,
  });

  return ratesService.fetchCurrencies()
    .then((data) => {
      dispatch({
        type: types.FETCH_CURRENCIES_SUCCESS,
        payload: { data },
      });

      return true;
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_CURRENCIES_FAIL,
        payload: { error },
      });

      throw error;
    });
};
