import { FC, memo, MouseEvent } from "react";
import Image from "next/image";
import { IconButton, LikeButton } from "@/components/ui";
import { Rating } from "@/components/elements";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TProductCardProps } from "./types";

const ProductCard: FC<TProductCardProps> = ({
  product,
  onCardClick,
  onToggleLike,
  onDelete,
  onEdit,
}) => {
  const { id, title, price, rating, thumbnail, isLiked } = product;

  const handleCardClick = () => {
    onCardClick(product.id);
  };

  const handleToggleLike = (e: MouseEvent) => {
    e.stopPropagation();
    onToggleLike(id);
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  const handleEdit = (e: MouseEvent) => {
    e.stopPropagation();
    onEdit(id);
  };

  return (
    <article
      className="relative flex flex-col gap-2 items-center min-h-50 p-2 bg-neutral-900 rounded-lg hover:cursor-pointer"
      onClick={handleCardClick}
    >
      <Image
        width={192}
        height={192}
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="w-48 h-48 object-cover"
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
          <LikeButton isLiked={isLiked} onClick={handleToggleLike} />
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

export const MemoizedProductCard = memo(ProductCard);
