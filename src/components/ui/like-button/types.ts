import { ButtonHTMLAttributes } from "react";

export type TLikeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLiked: boolean;
  className?: string;
};
