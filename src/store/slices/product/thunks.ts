import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAPI } from "@/services";
import { TFetchAllProductsResponse } from "@/services/product";

const FETCH_ALL_PRODUCTS = "products/fetch-all";

// Todo: error handle
export const fetchAllProductsAsync =
  createAsyncThunk<TFetchAllProductsResponse>(
    FETCH_ALL_PRODUCTS,
    async (_, { rejectWithValue }) => {
      try {
        const products = await productAPI.fetchAllProducts();
        return products;
      } catch (err) {
        console.error("Error fetching products:", err);
        return rejectWithValue("");
      }
    }
  );
