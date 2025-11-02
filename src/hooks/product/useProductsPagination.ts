import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "@/store";
import { getProductPagination, setCurrentPage } from "@/store/slices";
import { TProduct } from "@/shared/types";
import { paginateProducts } from "@/shared/utils";

export const useProductsPagination = (filteredProducts: TProduct[]) => {
  const dispatch = useDispatch();
  const { limit, currentPage } = useSelector(getProductPagination);

  const onPageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const paginatedProducts = useMemo(
    () => paginateProducts(filteredProducts, currentPage, limit),
    [filteredProducts, currentPage, limit]
  );

  return {
    paginatedProducts,
    limit,
    currentPage,
    onPageChange,
  };
};
