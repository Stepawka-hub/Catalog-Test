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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormWrapper title={title} onSubmit={onSubmit}>
      {fields.map(({ name, label, type, placeholder, validation }) => {
        const messageError = errors[name]?.message;
        const safeMessage =
          typeof messageError === "string" ? messageError : "";
        return (
          <Input
            key={name}
            id={name}
            label={label}
            type={type}
            step="any"
            placeholder={placeholder}
            error={safeMessage}
            {...register(name, validation)}
          />
        );
      })}
      {children}
      {actions}
    </FormWrapper>
  );
};
