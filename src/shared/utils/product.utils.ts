import { TProduct } from "../types";

const PRODUCT_FIELDS: (keyof TProduct)[] = [
  "id",
  "title",
  "description",
  "category",
  "price",
  "discountPercentage",
  "rating",
  "stock",
  "tags",
  "brand",
  "sku",
  "availabilityStatus",
  "meta",
  "thumbnail",
  "images",
];

export const getProductSelectFields = () => PRODUCT_FIELDS.join(",");
