import { TProduct, TProductId } from "@/shared/types";

export type TProductCardProps = {
  product: TProduct;
  onCardClick: (pId: TProductId) => void;
  onToggleLike: (pId: TProductId) => void;
  onDelete: (pId: TProductId) => void;
};
