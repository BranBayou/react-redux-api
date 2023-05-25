import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  user: 'bran',
  initialState,
  extraReducers: {},
});

export const { extraReducers } = usersSlice.actions;

export default usersSlice.reducer;