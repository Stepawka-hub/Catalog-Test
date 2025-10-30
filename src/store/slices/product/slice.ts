import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductState } from "./types";
import { fetchAllProductsAsync } from "./thunks";
import { TProduct } from "@/shared/types";

const initialState: TProductState = {
  products: [],
  productLoading: {
    isFetching: false,
    isCreating: false,
    isDeleting: false,
    isEditing: false,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  selectors: {
    getProducts: (state) => state.products,
    getIsFetchingProducts: (state) => state.productLoading.isFetching,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllProductsAsync.pending, (store) => {
        store.productLoading.isFetching = true;
      })
      .addCase(
        fetchAllProductsAsync.fulfilled,
        (store, { payload }: PayloadAction<TProduct[]>) => {
          store.productLoading.isFetching = false;
          store.products = payload;
        }
      )
      .addCase(fetchAllProductsAsync.rejected, (store) => {
        store.productLoading.isFetching = false;
      });
  },
});

export const productReducer = productSlice.reducer;
export const { getProducts, getIsFetchingProducts } = productSlice.selectors;
