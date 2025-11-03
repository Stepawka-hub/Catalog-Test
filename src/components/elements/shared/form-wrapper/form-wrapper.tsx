import { FC } from "react";
import { TFormWrapperProps } from "./types";

export const FormWrapper: FC<TFormWrapperProps> = ({
  title,
  children,
  ...props
}) => (
  <form {...props}>
    {title && (
      <h2 className="mb-3 text-center font-medium text-orange-400 text-lg md:text-2xl">
        {title}
      </h2>
    )}
    <div className="flex flex-col gap-4">{children}</div>
  </form>
);
