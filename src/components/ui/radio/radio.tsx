import { FC } from "react";
import { TRadioProps } from "./types";

export const Radio: FC<TRadioProps> = ({ id, label, ...props }) => (
  <div className="flex items-center">
    <input
      id={id}
      type="radio"
      name="default-radio"
      className="hidden peer"
      {...props}
    />
    <label
      htmlFor={id}
      className="block relative pl-8 sm:pl-9 leading-5 text-white text-base sm:text-lg select-none hover:cursor-pointer
          before:content-[''] before:absolute before:w-5 before:h-5 before:top-0 before:left-0 before:rounded-full before:border-2 
          before:border-white before:transition-all before:ease-in-out before:duration-200 hover:before:border-orange-400 
          peer-checked:before:border-6 peer-checked:before:border-orange-400
          peer-disabled:before:grayscale peer-disabled:before:grayscale-100"
    >
      {label}
    </label>
  </div>
);
