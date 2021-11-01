
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  token: '',
};

export const SET_USER_DATA = createAction('SET_USER_DATA');
export const SET_API_TOKEN = createAction('SET_API_TOKEN');
export const RESET_API_TOKEN = createAction('RESET_API_TOKEN');


export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(SET_USER_DATA, (state, { payload }) => {
      state.userData = payload;
    })
    .addCase(SET_API_TOKEN, (state, { payload }) => {
      state.token = payload;
    })
    .addCase(RESET_API_TOKEN, (state) => {
      state.token = '';
    });
});


