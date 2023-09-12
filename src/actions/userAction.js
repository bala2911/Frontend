import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstant';
import axios from 'axios';

//It make the login request and get the token
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    //We also want to dispatch user login success
    //When we want to send data, we want to send in the headers "Content-Type"
    //this also where we pass the token for protected routes
    //we set the authorization for the token
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //make a request
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //set our user to locastorage
    localStorage.setItem('userInfo', JSON.stringify(data));
    localStorage.setItem('isSubmarineVisible', true);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('isSubmarineVisible');
  dispatch({ type: USER_LOGOUT });
  return { success: true };
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    //We also want to dispatch user login success
    //When we want to send data, we want to send in the headers "Content-Type"
    //this also where we pass the token for protected routes
    //we set the authorization for the token
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    //make a request
    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    //When we login or we register we are getting the same thing back
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    //set our user to locastorage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
