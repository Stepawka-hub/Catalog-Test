export type TProduct = {
  id: number;
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
};
