import { TProduct, TProductAction } from "@/shared/types";

export type TProductListUIProps = {
  products: TProduct[];
  isLoading: boolean;
  isFetched: boolean;
  limit: number;
  onCardClick: TProductAction;
  onToggleLike: TProductAction;
  onDelete: TProductAction;
};
