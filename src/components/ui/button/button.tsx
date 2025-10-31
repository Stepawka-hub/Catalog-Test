import { FC } from "react";
import { TButtonProps } from "./types";

export const Button: FC<TButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="py-2 px-3 bg-orange-600 rounded-lg text-lg hover:cursor-pointer hover:opacity-85 active:opacity-75 transition duration-200 ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
};
