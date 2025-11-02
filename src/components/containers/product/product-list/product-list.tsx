"use client";

import { FC, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "@/store";
import {
  deleteProduct,
  fetchAllProductsAsync,
  getFilter,
  getIsFetchingProducts,
  getIsProductsFetched,
  getProductPagination,
  getProducts,
  getSearchQuery,
  setCurrentPage,
  toggleLike,
} from "@/store/slices";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { Pagination, ProductListUI } from "@/components/elements";
import { TProductId } from "@/shared/types";
import { filterProducts, paginateProducts } from "@/shared/utils";

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
  const isFetching = useSelector(getIsFetchingProducts);
  const isProductsFetched = useSelector(getIsProductsFetched);

  const { limit, currentPage } = useSelector(getProductPagination);
  const searchQuery = useSelector(getSearchQuery);
  const filter = useSelector(getFilter);

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

  const onProductDelete = useCallback(
    (productId: TProductId) => {
      dispatch(deleteProduct(productId));
    },
    [dispatch]
  );

  const onPageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const filteredProducts = useMemo(
    () => filterProducts(products, filter, searchQuery),
    [products, filter, searchQuery]
  );

  const paginatedProducts = useMemo(
    () => paginateProducts(filteredProducts, currentPage, limit),
    [filteredProducts, currentPage, limit]
  );

  return (
    <div>
      <ProductListUI
        products={paginatedProducts}
        isLoading={isFetching}
        isFetched={isProductsFetched}
        limit={limit}
        onCardClick={onCardClick}
        onToggleLike={onToggleLike}
        onDelete={onProductDelete}
      />
      <Pagination
        limit={limit}
        currentPage={currentPage}
        totalCount={filteredProducts.length}
        onPageChange={onPageChange}
      />
    </div>
  );
};
