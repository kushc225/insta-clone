import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const loginReducer = createReducer(initialState, {
  loginStart: (state) => {
    state.login = true;
  },
  loginEnd: (state) => {
    state.login = false;
  },
});
