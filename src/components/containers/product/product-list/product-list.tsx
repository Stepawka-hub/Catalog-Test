"use client";

import { FC, useState } from "react";
import {
  useEditProductModal,
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
import { EditProductForm } from "@/components/containers";
import { Modal, Pagination, ProductListUI } from "@/components/elements";

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

  const {
    editingProductId,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    handleEditSuccess,
  } = useEditProductModal();

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
        onEdit={openEditModal}
      />
      <Pagination
        limit={limit}
        currentPage={currentPage}
        totalCount={filteredProducts.length}
        onPageChange={onPageChange}
      />
      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        {editingProductId && (
          <EditProductForm
            productId={editingProductId}
            onSuccess={handleEditSuccess}
            onCancel={closeEditModal}
          />
        )}
      </Modal>
    </div>
  );
};
