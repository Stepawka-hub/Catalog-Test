"use client";

import { useFormContext } from "react-hook-form";
import { TFormProps } from "./types";
import { FormWrapper } from "../form-wrapper";
import { Input } from "@/components/ui";

export const Form = <T,>({
  title,
  fields,
  children,
  actions,
  onSubmit,
}: TFormProps<T>) => {
  const { register } = useFormContext();

  return (
    <FormWrapper title={title} onSubmit={onSubmit}>
      {fields.map((field) => (
        <Input
          id={field.name}
          key={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          {...register(field.name, field.validation)}
        />
      ))}
      {children}
      {actions}
    </FormWrapper>
  );
};
