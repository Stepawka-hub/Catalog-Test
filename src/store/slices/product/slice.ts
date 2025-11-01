import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductState } from "./types";
import { fetchAllProductsAsync } from "./thunks";
import { TFetchAllProductsResponse } from "@/services/product";
import { TProductFilter } from "@/shared/types";

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
  searchQuery: "",
  filter: "all",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.pagination.currentPage = payload;
    },
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setFilter: (state, { payload }: PayloadAction<TProductFilter>) => {
      state.filter = payload;
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getProductPagination: (state) => state.pagination,
    getIsFetchingProducts: (state) => state.productLoading.isFetching,
    getSearchQuery: (state) => state.searchQuery,
    getFilter: (state) => state.filter,
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
export const { setCurrentPage, setSearchQuery, setFilter } =
  productSlice.actions;
export const {
  getProducts,
  getProductPagination,
  getIsFetchingProducts,
  getSearchQuery,
  getFilter,
} = productSlice.selectors;
