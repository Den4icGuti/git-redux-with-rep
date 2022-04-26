import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: "",
    isloggin: false,
    password: "",
    isPassword:false
  },
  reducers: {
    logUser(state, action) { 
      state.login = action.payload;
      state.isloggin = true;
    },
    passUser(state, action) {
      state.password = action.payload
      state.isPassword = true;
    },
    logOut(state) { 
      state.login = "";
      state.isloggin = false;
    },
    passOut(state) { 
      state.password = "";
      state.isPassword = false;
    }
  }
})

export const { logUser, logOut, passUser, passOut } = userSlice.actions;


