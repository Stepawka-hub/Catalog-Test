import { FC } from "react";
import { TProductCardProps } from "./types";
import Image from "next/image";

export const ProductCard: FC<TProductCardProps> = ({
  product,
  onCardClick,
}) => {
  const handleCardClick = () => {
    onCardClick(product.id);
  };

  return (
    <article
      className="flex flex-col items-center min-h-50 bg-neutral-900 rounded-lg hover:cursor-pointer"
      onClick={handleCardClick}
    >
      <Image
        src={product.thumbnail}
        width={128}
        height={128}
        alt={`${product.title} preview`}
      />
      <div className="text-center">
        <h3>{product.title}</h3>
      </div>
    </article>
  );
};
