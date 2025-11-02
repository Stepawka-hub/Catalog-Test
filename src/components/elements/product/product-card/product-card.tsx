import { FC, MouseEvent } from "react";
import { TProductCardProps } from "./types";
import Image from "next/image";

import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

export const ProductCard: FC<TProductCardProps> = ({
  product,
  onCardClick,
  onToggleLike,
}) => {
  const handleCardClick = () => {
    onCardClick(product.id);
  };

  const handleToggleLike = (e: MouseEvent) => {
    e.stopPropagation();
    onToggleLike(product.id);
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
      <div>
        <button onClick={handleToggleLike}>
          {product.isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>
      <div className="text-center">
        <h3>{product.title}</h3>
      </div>
    </article>
  );
};
