"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "@/store";
import { getSelectedProduct } from "@/store/slices";
import { EmptyResults, Rating } from "@/components/elements";
import Image from "next/image";

export const ProductDetails: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectedProduct = useSelector((state) =>
    getSelectedProduct(state, Number(productId))
  );

  if (!selectedProduct) {
    return <EmptyResults label="Товар не найден" />;
  }

  const { title, description, rating, stock, price, images, thumbnail } =
    selectedProduct;

  return (
    <div className="grid grid-cols-2 gap-10 max-w-[60vw] mx-auto">
      <div className="flex flex-col gap-2 p-4 bg-neutral-900 rounded-lg">
        <Image
          src={thumbnail}
          width={384}
          height={384}
          className="self-center"
          alt={`${title} - main image`}
        />
        <div className="flex">
          {images.map((image, idx) => (
            <Image key={idx} src={image} width={96} height={96} alt="1" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-8 bg-neutral-900 rounded-lg">
        <h1 className="mt-4 text-3xl font-medium">{title}</h1>
        <Rating rating={rating} />
        <p>Описание: {description}</p>
        <div className="flex justify-between items-end mt-auto font-medium">
          <span className="text-2xl">В наличии: {stock} шт.</span>
          <span className="text-3xl text-green-500">{price} ₽</span>
        </div>
      </div>
    </div>
  );
};
