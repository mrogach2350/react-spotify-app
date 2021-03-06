import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export const getState = () => store.getState();
export const selectToken = () => getState().auth.token;

export default store;
