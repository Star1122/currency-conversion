import convertsService from 'services/converts.service';
import types from './types';

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
