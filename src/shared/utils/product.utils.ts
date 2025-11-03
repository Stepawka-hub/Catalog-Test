import {
  PRODUCT_FIELDS,
  PRODUCT_FILTER,
  PRODUCT_HIGH_RATING,
} from "../constants";
import { TProduct, TProductFilter } from "../types";

export const getProductSelectFields = () => PRODUCT_FIELDS.join(",");

export const filterProducts = (
  products: TProduct[],
  filter: TProductFilter,
  searchQuery: string
): TProduct[] => {
  let filtered = products;

  if (filter === PRODUCT_FILTER.FAVORITES) {
    filtered = filtered.filter((product) => product.isLiked);
  } else if (filter === PRODUCT_FILTER.HIGH_RATING) {
    filtered = filtered.filter(
      (product) => product.rating >= PRODUCT_HIGH_RATING
    );
  }

  if (searchQuery.trim()) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return filtered;
};

export const paginateProducts = (
  products: TProduct[],
  page: number,
  limit: number
): TProduct[] => {
  const startIdx = (page - 1) * limit;
  const endIdx = startIdx + limit;
  return products.slice(startIdx, endIdx);
};

export const generateSKU = (): string => {
  const prefix = "PRD";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};
