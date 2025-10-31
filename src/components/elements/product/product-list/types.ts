import { TProduct, TProductId } from "@/shared/types";

export type TProductListUIProps = {
  products: TProduct[];
  isLoading: boolean;
  onCardClick: (pId: TProductId) => void;
};
