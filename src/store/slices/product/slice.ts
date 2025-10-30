import { createSlice } from "@reduxjs/toolkit";
import { TProductState } from "./types";

const initialState: TProductState = {};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const productReducer = productSlice.reducer;
