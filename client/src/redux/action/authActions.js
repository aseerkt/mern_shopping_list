import axios from 'axios';

import {
  USERS_LOADING,
  USERS_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './actionTypes';
import { returnErrors } from './errorActions';

// CHECK TOKEN AND LOAD USER-------------------------------------------------------------------

export const loadUser = () => (dispatch, getState) => {
  // Users loading
  dispatch({ type: USERS_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USERS_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// REGISTER USER--------------------------------------------------------------------------

export const registerUser = ({ name, email, password }) => (dispatch) => {
  // config
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // request body
  const body = JSON.stringify({ name, email, password });

  // Making post request to /api/users end point to register user
  axios
    .post('/api/users', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    // Register Post Fails
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data.msg, err.response.status, REGISTER_FAIL)
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGIN USER

export const loginUser = (email, password) => (dispatch) => {
  // config
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // request body
  const body = JSON.stringify({ email, password });

  // Making post request to /api/auth to login user
  axios
    .post('/api/auth', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data.msg, err.response.status, LOGIN_FAIL)
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// LOGOUT USER

export const logoutUser = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

// TOKEN CONFIG HELPER--------------------------------------------------------------

export const tokenConfig = (getState) => {
  // Get token
  const token = getState().auth.token;
  // Setup config headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Add x-auth-token if token is there
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
