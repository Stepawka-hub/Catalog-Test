import { FC } from "react";
import { TButtonProps } from "./types";
import clsx from "clsx";

export const Button: FC<TButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "py-1 px-3 bg-white text-black rounded-lg text-lg hover:cursor-pointer hover:opacity-85 active:opacity-75 transition duration-200 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
