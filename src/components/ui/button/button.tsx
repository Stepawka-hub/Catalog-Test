import { FC } from "react";
import { TButtonProps } from "./types";
import clsx from "clsx";

export const Button: FC<TButtonProps> = ({
  children,
  className,
  startIcon,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex gap-2 items-center py-1 px-3 bg-white text-black rounded-lg text-lg hover:cursor-pointer hover:opacity-85 active:opacity-75 transition duration-200 ease-in-out",
        className
      )}
      {...props}
    >
      {startIcon}
      {children}
    </button>
  );
};
