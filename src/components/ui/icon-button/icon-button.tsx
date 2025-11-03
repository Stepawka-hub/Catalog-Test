import { FC } from "react";
import { TIconButtonProps } from "./types";
import clsx from "clsx";

export const IconButton: FC<TIconButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={clsx(
      "p-2 rounded-full bg-neutral-800 hover:cursor-pointer hover:opacity-85 active:opacity-75 transition-opacity duration-200",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
