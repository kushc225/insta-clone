import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  name: "",
};

export const loginReducer = createReducer(initialState, {
  loginStart: (state) => {
    state.isLogin = true;
  },
  loginEnd: (state) => {
    state.isLogin = false;
  },
  setUserName: (state, action) => {
    state.name = action.payload;
  },
});
