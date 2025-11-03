import { TProduct, TProductFilter } from "../types";

export const PRODUCT_FIELDS: (keyof TProduct)[] = [
  "id",
  "title",
  "description",
  "category",
  "price",
  "rating",
  "stock",
  "tags",
  "brand",
  "sku",
  "meta",
  "thumbnail",
  "images",
];

export const PRODUCT_FILTER: Record<string, TProductFilter> = {
  ALL: "all",
  FAVORITES: "favorites",
  HIGH_RATING: "high rating",
} as const;

export const PRODUCT_HIGH_RATING = 4.5;
