import { PRODUCT_FILTER } from "../constants";
import { TProduct, TProductFilter } from "../types";

const PRODUCT_FIELDS: (keyof TProduct)[] = [
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

export const getProductSelectFields = () => PRODUCT_FIELDS.join(",");

export const filterProducts = (
  products: TProduct[],
  filter: TProductFilter,
  searchQuery: string
): TProduct[] => {
  let filtered = products;

  if (filter === PRODUCT_FILTER.FAVORITES) {
    filtered = filtered.filter((product) => product.isLiked);
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
