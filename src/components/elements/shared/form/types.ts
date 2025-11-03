import { ReactNode } from "react";
import { TFormField } from "@/shared/types";

export type TFormProps<T> = {
  title: string;
  fields: TFormField<T>[];
  children?: ReactNode;
  actions: ReactNode;
  onSubmit: () => void;
};
