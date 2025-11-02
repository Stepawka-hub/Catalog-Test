import { useMemo } from "react";
import { useSelector } from "@/store";
import { getFilter, getSearchQuery } from "@/store/slices";
import { filterProducts } from "@/shared/utils";
import { TProduct } from "@/shared/types";

export const useProductsFilters = (products: TProduct[]) => {
  const searchQuery = useSelector(getSearchQuery);
  const filter = useSelector(getFilter);

  const filteredProducts = useMemo(
    () => filterProducts(products, filter, searchQuery),
    [products, filter, searchQuery]
  );

  return { filteredProducts, searchQuery, filter };
};
