import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAPI } from "@/services";
import { TProduct } from "@/shared/types";

const FETCH_ALL_PRODUCTS = "products/fetch-all";

export const fetchAllProductsAsync = createAsyncThunk<TProduct[]>(
  FETCH_ALL_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const products = await productAPI.fetchAllProducts();
      return products;
    } catch (err) {
      console.error("Error fetching products:", err);
      return rejectWithValue("Ошибка загрузки товаров");
    }
  }
);
