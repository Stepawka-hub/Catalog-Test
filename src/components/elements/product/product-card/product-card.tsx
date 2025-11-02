import { FC, MouseEvent } from "react";
import { TProductCardProps } from "./types";
import Image from "next/image";

import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

import { IconButton } from "@/components/ui";

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

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleEdit = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <article
      className="relative flex flex-col items-center min-h-50 p-2 bg-neutral-900 rounded-lg hover:cursor-pointer"
      onClick={handleCardClick}
    >
      <Image
        src={product.thumbnail}
        width={192}
        height={192}
        alt={`${product.title} preview`}
      />
      <div className="absolute w-full flex justify-between">
        <div className="flex gap-2 ml-2">
          <IconButton className="group" onClick={handleDelete}>
            <MdDelete
              size="1.25rem"
              className="group-hover:text-red-500 transition-colors duration-200"
            />
          </IconButton>
          <IconButton onClick={handleEdit}>
            <MdEdit size="1.25rem" />
          </IconButton>
        </div>
        <div className="mr-2">
          <IconButton onClick={handleToggleLike}>
            {product.isLiked ? (
              <MdFavorite size="1.25rem" className="text-red-400" />
            ) : (
              <MdFavoriteBorder size="1.25rem" />
            )}
          </IconButton>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="text-xl text-green-400 font-medium">{product.price} ₽</p>
        <h3 className="text-lg line-clamp-1">{product.title}</h3>
        <div className="flex gap-1 items-center">
          <IoIosStar size="1.05rem" className="mb-0.5 text-orange-400" />
          <span>{product.rating}</span>
        </div>
      </div>
    </article>
  );
};
