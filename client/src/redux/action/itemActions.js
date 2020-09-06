import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './actionTypes';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => (dispatch) => {
  dispatch(ItemIsLoading());
  axios
    .get('/api/items')
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data.msg, err.response.status))
    );
};

export const addItem = (item) => (dispatch, getState) => {
  axios
    .post('/api/items', item, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(
        returnErrors(
          err.response.data.msg,
          err.response.status,
          'ADD_ITEM_FAIL'
        )
      )
    );
};

export const deleteItem = (itemId) => (dispatch, getState) => {
  axios
    .delete(`/api/items/${itemId}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: itemId,
      })
    )
    .catch((err) =>
      dispatch(
        returnErrors(
          err.response.data.msg,
          err.response.status,
          'DELETE_ITEM_FAIL'
        )
      )
    );
};

export const ItemIsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
