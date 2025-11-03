export type TProductId = string;

export type TProduct = {
  id: TProductId;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand?: string;
  sku: string;
  thumbnail: string;
  images: string[];
  isLiked: boolean;
};

export type TCreateProduct = Pick<
  TProduct,
  | "title"
  | "description"
  | "category"
  | "price"
  | "stock"
  | "brand"
  | "thumbnail"
>;

export type TProductFilter = "all" | "favorites" | "high rating";
export type TProductAction = (productId: TProductId) => void;
