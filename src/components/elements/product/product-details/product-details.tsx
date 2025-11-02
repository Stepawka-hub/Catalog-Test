import { FC } from "react";
import { Rating, Gallery, DetailsList } from "@/components/elements";
import { TProductDetailsProps } from "./types";

export const ProductDetailsUI: FC<TProductDetailsProps> = ({
  title,
  description,
  category,
  sku,
  rating,
  brand,
  stock,
  price,
  thumbnail,
  images,
}) => (
  <div className="grid grid-cols-2 gap-8 max-w-[60vw] mx-auto">
    <Gallery name={title} thumbnail={thumbnail} images={images} />

    <div className="flex flex-col gap-2 p-8 bg-neutral-900 rounded-lg">
      <h1 className="mt-4 text-3xl font-medium">{title}</h1>
      <Rating rating={rating} />
      <DetailsList
        items={[
          { label: "Описание", value: description },
          { label: "Категория", value: category },
          { label: "Бренд", value: brand },
          { label: "Артикул", value: sku },
        ]}
      />
      <div className="flex justify-between items-end mt-auto font-medium">
        <span className="text-2xl">В наличии: {stock} шт.</span>
        <span className="text-3xl text-green-500">{price} ₽</span>
      </div>
    </div>
  </div>
);
