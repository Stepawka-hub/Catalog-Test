import { FC } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { IconButton } from "../icon-button";
import { TLikeButtonProps } from "./types";

export const LikeButton: FC<TLikeButtonProps> = ({
  isLiked,
  className,
  onClick,
  ...props
}) => (
  <IconButton {...props} className={className || "text-xl"} onClick={onClick}>
    {isLiked ? <MdFavorite className="text-red-400" /> : <MdFavoriteBorder />}
  </IconButton>
);
