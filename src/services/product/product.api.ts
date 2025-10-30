import api from "../api-instance";
import { BaseAPI } from "../base";

class ProductAPI extends BaseAPI {
  fetchAllProducts = async () => {
    const { data } = await this.api.get(`products`);
    return data;
  };
}

export const productAPI = new ProductAPI(api);
