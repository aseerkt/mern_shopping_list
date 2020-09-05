import { combineReducers } from 'redux';
import ItemReducer from './ItemsReducer';

export default combineReducers({
  items: ItemReducer
});