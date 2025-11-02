import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductState } from "./types";
import { fetchAllProductsAsync } from "./thunks";
import { TProduct, TProductFilter, TProductId } from "@/shared/types";

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
    toggleLike: (state, { payload }: PayloadAction<TProductId>) => {
      const product = state.products.find((p) => p.id === payload);

      if (product) {
        product.isLiked = !product.isLiked;
      }
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
        (state, { payload }: PayloadAction<TProduct[]>) => {
          state.productLoading.isFetching = false;
          state.products = payload;
        }
      )
      .addCase(fetchAllProductsAsync.rejected, (state) => {
        state.productLoading.isFetching = false;
      });
  },
});

export const productReducer = productSlice.reducer;
export const { setCurrentPage, setSearchQuery, setFilter, toggleLike } =
  productSlice.actions;
export const {
  getProducts,
  getProductPagination,
  getIsFetchingProducts,
  getSearchQuery,
  getFilter,
} = productSlice.selectors;
