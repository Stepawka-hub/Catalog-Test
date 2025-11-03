import { TProductId } from "@/shared/types";

export const ROUTES = {
  HOME: "/",
  CATALOG: "/products",
  CREATE_PRODUCT: "create-product",
  PRODUCT_PAGE: (productId: TProductId) => `/products/${productId}`,
  NOT_FOUND: "*",
} as const;
