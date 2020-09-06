// Import Action Types
import {
  USERS_LOADING,
  USERS_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../action/actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USERS_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload, // token and user comes from here
        isAuthenticated: true,
        isLoading: false,
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.setItem('token', null);
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
}
