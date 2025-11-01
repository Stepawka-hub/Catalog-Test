import { TProductFilter } from "../types";

export const PRODUCT_FILTER: Record<string, TProductFilter> = {
  ALL: "all",
  FAVORITES: "favorites",
} as const;
