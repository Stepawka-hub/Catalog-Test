"use client";

import { FC } from "react";
import { Pagination, ProductListUI } from "@/components/elements";
import {
  useProductsActions,
  useProductsFilters,
  useProductsPagination,
} from "@/hooks";
import { useSelector } from "@/store";
import {
  getIsFetchingProducts,
  getIsProductsFetched,
  getProducts,
} from "@/store/slices";

/*
  Архитектурное решение: 
  Выбранное API не предоставляет полноценные методы для:
  - Создания, удаления, редактирования, добавления товара в избранное

  Поэтому реализована клиентская пагинация (серверная убрана).
  Это позволит избежать избыточных костыльных решений при синхронизации
  статичных серверных данных с клиентскими изменениями.
*/
export const ProductList: FC = () => {
  const products = useSelector(getProducts);
  const isFetching = useSelector(getIsFetchingProducts);
  const isProductsFetched = useSelector(getIsProductsFetched);

  const { onCardClick, onToggleLike, onProductDelete } = useProductsActions();
  const { filteredProducts } = useProductsFilters(products);
  const { paginatedProducts, limit, currentPage, onPageChange } =
    useProductsPagination(filteredProducts);

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
