import { FormHTMLAttributes, ReactNode } from "react";

export type TFormWrapperProps = FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
  children: ReactNode;
};
