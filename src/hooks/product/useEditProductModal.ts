import { useState } from "react";
import { TProductId } from "@/shared/types";

export const useEditProductModal = () => {
  const [editingProductId, setEditingProductId] = useState<TProductId | null>(
    null
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = (productId: TProductId) => {
    setEditingProductId(productId);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingProductId(null);
  };

  const handleEditSuccess = () => {
    closeEditModal();
  };

  return {
    editingProductId,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    handleEditSuccess,
  };
};
