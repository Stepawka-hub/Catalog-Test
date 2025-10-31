import api from "../api-instance";
import { BaseAPI } from "../base";
import { transformApiProduct } from "@/shared/utils";
import {
  TFetchAllProductsParams,
  TFetchAllProductsResponse,
  TProductListResponse,
} from "./product.types";

class ProductAPI extends BaseAPI {
  // Todo: Select fields
  fetchAllProducts = async (
    limit: number = 0,
    skip: number = 0
  ): Promise<TFetchAllProductsResponse> => {
    const params: TFetchAllProductsParams = {
      limit,
      skip,
    };

    const { data } = await this.api.get<TProductListResponse>("products", {
      params,
    });

    return {
      totalCount: data.total,
      products: data.products.map(transformApiProduct),
    };
  };
}

export const productAPI = new ProductAPI(api);
