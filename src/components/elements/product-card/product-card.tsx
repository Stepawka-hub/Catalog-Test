import { FC } from "react";
import { TProductCardProps } from "./types";

export const ProductCard: FC<TProductCardProps> = ({ product }) => {
  return <div>{product.title}</div>;
};
