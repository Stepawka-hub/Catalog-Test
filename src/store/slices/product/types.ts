import { TPagination, TProduct, TProductFilter } from "@/shared/types";

export type TProductState = {
  products: TProduct[];
  isProductsFetched: boolean;
  isFetchingProducts: boolean;
  pagination: Omit<TPagination, "totalCount">;
  searchQuery: string;
  filter: TProductFilter;
};
