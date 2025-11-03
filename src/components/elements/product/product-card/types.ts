import { TProduct, TProductAction } from "@/shared/types";

export type TProductCardProps = {
  product: TProduct;
  onCardClick: TProductAction;
  onToggleLike: TProductAction;
  onDelete: TProductAction;
};
