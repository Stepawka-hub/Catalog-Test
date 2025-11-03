import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { TProductId } from "@/shared/types";
import { useDispatch } from "@/store";
import { deleteProduct, toggleLike } from "@/store/slices";

export const useProductsActions = () => {
  const dispatch = useDispatch();
  const router = useRouter();

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

  return { onCardClick, onToggleLike, onProductDelete };
};
