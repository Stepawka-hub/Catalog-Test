import { FC } from "react";
import { TInputProps } from "./types";
import clsx from "clsx";

export const Input: FC<TInputProps> = ({
  id,
  classes = {},
  label,
  error,
  className,
  ...props
}) => {
  const {
    wrapper,
    label: labelClass,
    input: inputClass,
    error: errorClass,
  } = classes;

  return (
    <div className={clsx("flex flex-col w-full", wrapper)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "mb-1 text-base md:text-lg  lg:text-[1.2rem]",
            labelClass
          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(
          "px-3 py-2 rounded-lg bg-neutral-900 outline-none text-base md:text-lg sm:px-2 sm:py-1.5",
          inputClass,
          className
        )}
        {...props}
      />
      {error && (
        <span
          className={clsx("mt-0.5 text-sm sm:text-base text-red-500", errorClass)}
        >
          {error}
        </span>
      )}
    </div>
  );
};
