import { TPagination, TProduct, TProductFilter } from "@/shared/types";

export type TProductState = {
  products: TProduct[];
  productLoading: {
    isFetching: boolean;
    isCreating: boolean;
    isDeleting: boolean;
    isEditing: boolean;
  };
  pagination: TPagination;
  searchQuery: string;
  filter: TProductFilter;
};
