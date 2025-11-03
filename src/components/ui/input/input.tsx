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
    <div className={wrapper}>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <input id={id} className={clsx(inputClass, className)} {...props} />
      {error && <span className={errorClass}>{error}</span>}
    </div>
  );
};
