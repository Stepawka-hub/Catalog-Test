import { ButtonHTMLAttributes, ReactNode } from "react";

export type TBackButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  path: string;
  startIcon: ReactNode;
};
