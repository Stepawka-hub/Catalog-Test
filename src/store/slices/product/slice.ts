import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductState } from "./types";
import { fetchAllProductsAsync } from "./thunks";
import { TFetchAllProductsResponse } from "@/services/product";

const initialState: TProductState = {
  products: [],
  productLoading: {
    isFetching: false,
    isCreating: false,
    isDeleting: false,
    isEditing: false,
  },
  pagination: {
    limit: 20,
    currentPage: 1,
    totalCount: 0,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.pagination.currentPage = payload;
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getProductPagination: (state) => state.pagination,
    getIsFetchingProducts: (state) => state.productLoading.isFetching,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.productLoading.isFetching = true;
      })
      .addCase(
        fetchAllProductsAsync.fulfilled,
        (state, { payload }: PayloadAction<TFetchAllProductsResponse>) => {
          const { totalCount, products } = payload;
          state.productLoading.isFetching = false;
          state.products = products;
          state.pagination.totalCount = totalCount;
        }
      )
      .addCase(fetchAllProductsAsync.rejected, (state) => {
        state.productLoading.isFetching = false;
      });
  },
});

export const productReducer = productSlice.reducer;
export const { setCurrentPage } = productSlice.actions;
export const { getProducts, getProductPagination, getIsFetchingProducts } =
  productSlice.selectors;
