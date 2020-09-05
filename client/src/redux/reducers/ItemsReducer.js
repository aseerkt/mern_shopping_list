import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../action/actionTypes';

const initialState = {
  docs: [],
  isLoading: false,
}

export default function(state=initialState, action){
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state,
        docs: action.payload,
        isLoading: false
      }
    case ADD_ITEM:
      return {
        ...state,
        docs: [...state.docs, action.payload]
      }
    case DELETE_ITEM:
      return {
        ...state,
        docs: state.docs.filter(item => item._id !== action.payload)
      }
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state;
  }
}