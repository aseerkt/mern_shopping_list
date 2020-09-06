import { combineReducers } from 'redux';
import itemReducer from './itemsReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  items: itemReducer,
  auth: authReducer,
  error: errorReducer,
});
