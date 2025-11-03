import { TProduct, TProductAction } from "@/shared/types";

export type TProductDetailsProps = {
  product: TProduct;
  onToggleLike: TProductAction;
};
