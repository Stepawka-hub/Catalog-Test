import { InputHTMLAttributes } from "react";

export type TRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
