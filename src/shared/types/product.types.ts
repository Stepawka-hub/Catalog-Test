export type TProductId = number;

export type TProduct = {
  id: TProductId;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  availabilityStatus: string;
  meta: {
    createdAt: string;
    updatedAt: string;
  };
  thumbnail: string;
  images: string[];
  isLiked: boolean;
};

export type TProductFilter = "all" | "favorites";
