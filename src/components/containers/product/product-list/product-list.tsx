"use client";

import { FC, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "@/store";
import {
  fetchAllProductsAsync,
  getIsFetchingProducts,
  getProductPagination,
  getProducts,
  setCurrentPage,
  toggleLike,
} from "@/store/slices";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { Pagination, ProductListUI } from "@/components/elements";
import { TProductId } from "@/shared/types";

/*
  Архитектурное решение: 
  Выбранное API не предоставляет полноценные методы для:
  - Создания, удаления, редактирования, добавления товара в избранное

  Поэтому реализована клиентская пагинация (серверная убрана).
  Это позволит избежать избыточных костыльных решений при синхронизации
  статичных серверных данных с клиентскими изменениями.
*/

export const ProductList: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector(getProducts);
  const { limit, currentPage, totalCount } = useSelector(getProductPagination);
  const isFetching = useSelector(getIsFetchingProducts);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  const onCardClick = useCallback(
    (productId: TProductId) => {
      router.push(ROUTES.PRODUCT_PAGE(productId));
    },
    [router]
  );

  const onToggleLike = useCallback(
    (productId: TProductId) => {
      dispatch(toggleLike(productId));
    },
    [dispatch]
  );

  const onPageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const filteredProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * limit;
    const endIdx = startIdx + limit;
    return products.slice(startIdx, endIdx);
  }, [products, currentPage, limit]);

  return (
    <div>
      <ProductListUI
        products={filteredProducts}
        isLoading={isFetching}
        limit={limit}
        onCardClick={onCardClick}
        onToggleLike={onToggleLike}
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
