import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const wishProductsFetch = createAsyncThunk(
  "wishProducts/wishProductsFetch",
  async () => {
    const response = await axios.get("/Data.json");
    return response?.data;
  }
);

const wishProductSlice = createSlice({
  name: "wishProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [wishProductsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [wishProductsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [wishProductsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default wishProductSlice.reducer;
