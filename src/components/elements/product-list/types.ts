import { TProduct, TProductId } from "@/shared/types";

export type TProductListUIProps = {
  products: TProduct[];
  onCardClick: (pId: TProductId) => void;
};
