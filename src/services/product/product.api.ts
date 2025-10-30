import api from "../api-instance";
import { BaseAPI } from "../base";
import { TProduct } from "@/shared/types";
import { transformApiProduct } from "@/shared/utils";
import { TProductListResponse } from "./product.types";

class ProductAPI extends BaseAPI {
  fetchAllProducts = async (): Promise<TProduct[]> => {
    const { data } = await this.api.get<TProductListResponse>("products");
    return data.products.map(transformApiProduct);
  };
}

export const productAPI = new ProductAPI(api);
