import api from "../api-instance";
import { BaseAPI } from "../base";
import { getProductSelectFields } from "@/shared/utils";
import { TProductListResponse } from "./product.types";
import { TProduct } from "@/shared/types";

class ProductAPI extends BaseAPI {
  fetchAllProducts = async (): Promise<TProduct[]> => {
    const selectFields = getProductSelectFields();
    const { data } = await this.api.get<TProductListResponse>(
      `https://dummyjson.com/products?limit=0&select=${selectFields}`
    );

    return data.products.map((product) => ({
      ...product,
      id: String(product.id),
      isLiked: false,
    }));
  };
}

export const productAPI = new ProductAPI(api);
