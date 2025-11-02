import { FC, MouseEvent } from "react";
import { TProductCardProps } from "./types";
import Image from "next/image";

import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

import { IconButton } from "@/components/ui";
import { Rating } from "../../shared";

export const ProductCard: FC<TProductCardProps> = ({
  product,
  onCardClick,
  onToggleLike,
  onDelete,
}) => {
  const { title, price, rating, thumbnail, isLiked } = product;

  const handleCardClick = () => {
    onCardClick(product.id);
  };

  const handleToggleLike = (e: MouseEvent) => {
    e.stopPropagation();
    onToggleLike(product.id);
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onDelete(product.id);
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
        width={192}
        height={192}
        src={thumbnail}
        alt={`${title} preview`}
      />
      <div className="absolute w-full flex justify-between">
        <div className="flex gap-2 ml-2">
          <IconButton className="group" onClick={handleDelete}>
            <MdDelete className="text-xl group-hover:text-red-500 transition-colors duration-200" />
          </IconButton>
          <IconButton onClick={handleEdit}>
            <MdEdit className="text-xl" />
          </IconButton>
        </div>
        <div className="mr-2">
          <IconButton onClick={handleToggleLike}>
            {isLiked ? (
              <MdFavorite className="text-xl text-red-400" />
            ) : (
              <MdFavoriteBorder className="text-xl " />
            )}
          </IconButton>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="text-lg lg:text-xl text-green-400 font-medium">
          {price} ₽
        </p>
        <h3 className="text-base lg:text-lg line-clamp-1">{title}</h3>
        <Rating rating={rating} />
      </div>
    </article>
  );
};
