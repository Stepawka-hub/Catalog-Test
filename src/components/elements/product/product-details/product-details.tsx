import { FC } from "react";
import { Gallery } from "@/components/containers";
import { Rating, DetailsList } from "@/components/elements";
import { LikeButton } from "@/components/ui";
import { TProductDetailsProps } from "./types";

export const ProductDetailsUI: FC<TProductDetailsProps> = ({
  product,
  onToggleLike,
}) => {
  const {
    id,
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
    isLiked,
  } = product;

  const handleToggleLike = () => {
    onToggleLike(id);
  };

  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:gap-4 xl:max-w-[80vw] 2xl:max-w-[70vw] mx-auto">
      <Gallery name={title} thumbnail={thumbnail} images={images} />

      <div className="flex flex-col gap-2 p-4 sm:p-6 md:p-8 bg-neutral-900 rounded-lg">
        <div className="flex justify-between items-center mt-4 gap-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
            {title}
          </h1>
          <LikeButton
            isLiked={isLiked}
            className="text-2xl"
            onClick={handleToggleLike}
          />
        </div>
        <Rating rating={rating} />
        <DetailsList
          items={[
            { label: "Описание", value: description },
            { label: "Категория", value: category },
            { label: "Бренд", value: brand },
            { label: "Артикул", value: sku },
          ]}
        />
        <div className="flex justify-between items-end gap-2 mt-5 lg:mt-auto font-medium">
          <span className="text-base sm:text-lg md:text-xl">
            В наличии: {stock} шт.
          </span>
          <span className="text-lg sm:text-xl md:text-2xl text-green-500">
            {price} ₽
          </span>
        </div>
      </div>
    </div>
  );
};
