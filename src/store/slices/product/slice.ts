import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductState } from "./types";
import { fetchAllProductsAsync } from "./thunks";
import { TProduct, TProductFilter, TProductId } from "@/shared/types";

const initialState: TProductState = {
  products: [],
  isProductsFetched: false,
  isFetchingProducts: false,
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
    editProduct: (state, { payload }: PayloadAction<TProduct>) => {
      const index = state.products.findIndex((p) => p.id === payload.id);

      if (index !== -1) {
        state.products[index] = payload;
      }
    },
    deleteProduct: (state, { payload }: PayloadAction<TProductId>) => {
      state.products = state.products.filter((p) => p.id !== payload);
    },
  },
  selectors: {
    getProducts: (state) => state.products,
    getProductPagination: (state) => state.pagination,
    getIsFetchingProducts: (state) => state.isFetchingProducts,
    getIsProductsFetched: (state) => state.isProductsFetched,
    getSearchQuery: (state) => state.searchQuery,
    getFilter: (state) => state.filter,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.isFetchingProducts = true;
      })
      .addCase(
        fetchAllProductsAsync.fulfilled,
        (state, { payload }: PayloadAction<TProduct[]>) => {
          state.isFetchingProducts = false;
          state.isProductsFetched = true;
          state.products = payload;
        }
      )
      .addCase(fetchAllProductsAsync.rejected, (state) => {
        state.isFetchingProducts = false;
        state.isProductsFetched = true;
      });
  },
});

export const productReducer = productSlice.reducer;
export const {
  setCurrentPage,
  setSearchQuery,
  setFilter,
  toggleLike,
  editProduct,
  deleteProduct,
} = productSlice.actions;
export const {
  getProducts,
  getProductPagination,
  getIsFetchingProducts,
  getSearchQuery,
  getFilter,
  getIsProductsFetched,
} = productSlice.selectors;
