import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './actionTypes';


export const getItems = () => dispatch => {
  dispatch(ItemIsLoading());
  axios
    .get('/api/items')
    .then(res => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    })
    .catch(err => console.log(err));
}

export const addItem = (item) => dispatch => {
  axios
    .post('/api/items', item)
    .then(res => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
}

export const deleteItem = (itemId) => dispatch => {
  axios
    .delete(`/api/items/${itemId}`)
    .then(res => dispatch({
      type: DELETE_ITEM,
      payload: itemId
    }))
    .catch(err => console.log(err));
}

export const ItemIsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}