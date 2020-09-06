// Import Action Types
import { GET_ERRORS, CLEAR_ERRORS } from '../action/actionTypes';

const initialState = {
  msg: null,
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
}
