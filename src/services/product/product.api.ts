import api from "../api-instance";
import { BaseAPI } from "../base";
import { getProductSelectFields } from "@/shared/utils";
import {
  TFetchAllProductsResponse,
  TProductListResponse,
} from "./product.types";

class ProductAPI extends BaseAPI {
  fetchAllProducts = async (): Promise<TFetchAllProductsResponse> => {
    const selectFields = getProductSelectFields();
    const { data } = await this.api.get<TProductListResponse>(
      `products?limit=0&select=${selectFields}`
    );

    return {
      totalCount: data.total,
      products: data.products.map((product) => ({
        ...product,
        isLiked: false,
      })),
    };
  };
}

export const productAPI = new ProductAPI(api);
