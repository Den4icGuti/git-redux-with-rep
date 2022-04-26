import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'countert',
  initialState: 0,
  reducers: {
    increment(state,action) { 
     return state + action.payload 
    },
    decrement(state, action) { 
      return state - action.payload
    }
  }
})

export const { increment, decrement } = slice.actions;

export default slice.reducer;