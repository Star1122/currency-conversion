import convertsService from 'services/converts.service';
import types from './types';

export const updateStats = (data) => ({
  type: types.UPDATE_STATS,
  payload: { data },
});

export const fetchStats = () => (dispatch, getState) => {
  if (getState().convertsData.isFetching) {
    return Promise.reject();
  }

  dispatch({
    type: types.FETCH_STATS,
  });

  return convertsService.fetchStats()
    .then((data) => {
      dispatch({
        type: types.FETCH_STATS_SUCCESS,
        payload: { data },
      });

      return true;
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_STATS_FAIL,
        payload: { error },
      });

      throw error;
    });
};

export const convert = (convertData) => (dispatch, getState) => {
  if (getState().convertsData.isConverting) {
    return Promise.reject();
  }

  dispatch({
    type: types.CONVERT,
  });

  return convertsService.convert(convertData)
    .then((data) => {
      dispatch({
        type: types.CONVERT_SUCCESS,
        payload: { data: data.result },
      });

      return true;
    })
    .catch((error) => {
      dispatch({
        type: types.CONVERT_FAIL,
        payload: { error },
      });

      throw error;
    });
};
