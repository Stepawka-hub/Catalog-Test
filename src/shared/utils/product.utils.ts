import { TApiProduct } from "@/services/product";
import { TProduct } from "../types";

export const transformApiProduct = (p: TApiProduct): TProduct => ({
  id: p.id,
  title: p.title,
  description: p.description,
  category: p.category,
  price: p.price,
  discountPercentage: p.discountPercentage,
  rating: p.rating,
  stock: p.stock,
  tags: p.tags,
  brand: p.brand,
  sku: p.sku,
  availabilityStatus: p.availabilityStatus,
  meta: {
    createdAt: p.meta.createdAt,
    updatedAt: p.meta.updatedAt,
  },
  thumbnail: p.thumbnail,
  images: p.images,
});
