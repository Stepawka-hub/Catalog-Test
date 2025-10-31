import { TProduct } from "@/shared/types";
import { TListResponse, TPaginationPayload } from "../types";

export type TApiProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  availabilityStatus: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  reviews: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
};

export type TProductListResponse = TListResponse<TApiProduct, "products">;

export type TFetchAllProductsResponse = {
  products: TProduct[];
  totalCount: number;
};

export type TFetchAllProductsParams = TPaginationPayload;
