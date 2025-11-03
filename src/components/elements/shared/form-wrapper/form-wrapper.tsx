import { FC } from "react";
import { TFormWrapperProps } from "./types";

export const FormWrapper: FC<TFormWrapperProps> = ({
  title,
  children,
  ...props
}) => (
  <form {...props}>
    {title && <h2>{title}</h2>}
    <fieldset>{children}</fieldset>
  </form>
);
