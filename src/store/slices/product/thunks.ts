import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAPI } from "@/services";
import { TFetchAllProductsResponse } from "@/services/product";
import { TPaginationPayload } from "@/services/types";

const FETCH_ALL_PRODUCTS = "products/fetch-all";

// Todo: error handle
export const fetchAllProductsAsync = createAsyncThunk<
  TFetchAllProductsResponse,
  TPaginationPayload
>(FETCH_ALL_PRODUCTS, async ({ limit, skip }, { rejectWithValue }) => {
  try {
    const products = await productAPI.fetchAllProducts(limit, skip);
    return products;
  } catch (err) {
    console.error("Error fetching products:", err);
    return rejectWithValue("");
  }
});
