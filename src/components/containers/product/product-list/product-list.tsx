"use client";

import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "@/store";
import {
  fetchAllProductsAsync,
  getIsFetchingProducts,
  getProductPagination,
  getProducts,
  setCurrentPage,
} from "@/store/slices";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { Pagination, ProductListUI } from "@/components/elements";
import { TProductId } from "@/shared/types";

export const ProductList: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector(getProducts);
  const { limit, currentPage, totalCount } = useSelector(getProductPagination);
  const isFetching = useSelector(getIsFetchingProducts);

  useEffect(() => {
    dispatch(fetchAllProductsAsync({ limit, skip: currentPage }));
  }, [dispatch, limit, currentPage]);

  const onCardClick = useCallback(
    (productId: TProductId) => {
      router.push(ROUTES.PRODUCT_PAGE(productId));
    },
    [router]
  );

  const onPageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  return (
    <div>
      <ProductListUI
        products={products}
        isLoading={isFetching}
        onCardClick={onCardClick}
      />
      <Pagination
        limit={limit}
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={onPageChange}
      />
    </div>
  );
};
