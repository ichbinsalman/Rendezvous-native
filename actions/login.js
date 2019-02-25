import firebase from 'firebase';
import NavigationService from '../NavigationService';

export const setUsername = (username = '') => async dispatch => {
  dispatch({
    type: 'SET_LOGIN_USERNAME',
    username
  });
};

export const setPassword = (password = '') => async dispatch => {
  dispatch({
    type: 'SET_LOGIN_PASSWORD',
    password
  });
};

export const login = (username = '', password = '') => async dispatch => {
  try {
    const firebaseUser = await firebase.auth().signInWithEmailAndPassword(username, password);
    dispatch({
      type: 'LOGIN_SUCCESSFUL'
    });
    NavigationService.navigate('Main');
  } catch (err) {
      dispatch({
        type: 'LOGIN_FAILURE',
        error: err
      });
  }
};
