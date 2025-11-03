import { ButtonHTMLAttributes, ReactNode } from "react";

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: ReactNode;
};
