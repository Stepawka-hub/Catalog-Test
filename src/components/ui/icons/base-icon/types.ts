import { ReactNode } from "react";
import { TIconProps } from "../types";

export type TBaseIconProps = TIconProps & {
  path: string;
  viewBox?: string;
  children?: ReactNode;
};
