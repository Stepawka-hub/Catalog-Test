"use client";

import { FC } from "react";
import { useDispatch } from "@/store";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/elements";
import { addProduct } from "@/store/slices";
import { CREATE_PRODUCT_FORM_FIELDS } from "@/shared/constants";
import { TProductCreateFormFields } from "./types";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";

export const CreateProductForm: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const methods = useForm<TProductCreateFormFields>({
    mode: "onChange",
    defaultValues: {
      title: "Тестовый товар",
      description: "Тестовое описание товара",
      category: "Разное",
      price: 5000,
      stock: 53,
      brand: "Stepawka",
    },
  });
  const { handleSubmit } = methods;

  /* 
    Note: Для изображений оставлено поле для ввода URL, а не поле для загрузки файла,
    так как иначе файл необходимо обработать на стороне бэкенда и сохранить в хранилище (например, S3)
  */
  const onSubmit: SubmitHandler<TProductCreateFormFields> = ({
    title,
    description,
    category,
    price,
    brand,
    stock,
    thumbnail,
  }) => {
    const processedData = {
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      brand: brand?.trim() || "",
      price: Number(price),
      stock: Number(stock),
      thumbnail,
    };

    dispatch(addProduct(processedData));
    router.push(ROUTES.CATALOG);
  };

  return (
    <FormProvider {...methods}>
      <Form
        title="Создание товара"
        fields={CREATE_PRODUCT_FORM_FIELDS}
        onSubmit={handleSubmit(onSubmit)}
        actions={
          <div className="mt-2">
            <Button type="submit" className="bg-green-600">
              Создать новый товар
            </Button>
          </div>
        }
      />
    </FormProvider>
  );
};
