export type TProductId = number;

export type TProduct = {
  id: TProductId;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  meta: {
    createdAt: string;
    updatedAt: string;
  };
  thumbnail: string;
  images: string[];
  isLiked: boolean;
};

export type TProductFilter = "all" | "favorites" | "high rating";
export type TProductAction = (productId: TProductId) => void;
