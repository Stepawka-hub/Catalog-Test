import { FC } from "react";
import { TBaseIconProps } from "./types";

export const BaseIcon: FC<TBaseIconProps> = ({
  className,
  path,
  fill,
  viewBox = "0 0 21 21",
  ...props
}) => (
  <svg
    className={className}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} fill={fill || "currentColor"} {...props} />
  </svg>
);
