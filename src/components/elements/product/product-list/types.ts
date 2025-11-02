import { TProduct, TProductId } from "@/shared/types";

export type TProductListUIProps = {
  products: TProduct[];
  isLoading: boolean;
  limit: number;
  onCardClick: (pId: TProductId) => void;
  onToggleLike: (pId: TProductId) => void;
};
