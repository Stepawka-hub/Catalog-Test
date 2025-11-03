"use client";

import { FC } from "react";
import { useDispatch, useSelector } from "@/store";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/elements";
import { editProduct, getSelectedProduct } from "@/store/slices";
import { EDIT_PRODUCT_FORM_FIELDS } from "@/shared/constants";
import { TProductEditFormFields, TProductEditFormProps } from "./types";
import { Button } from "@/components/ui";

export const EditProductForm: FC<TProductEditFormProps> = ({
  productId,
  onSuccess,
  onCancel,
}) => {
  const editableProduct = useSelector((state) =>
    getSelectedProduct(state, productId)
  );

  const dispatch = useDispatch();
  const methods = useForm<TProductEditFormFields>({
    mode: "onChange",
    defaultValues: {
      title: editableProduct?.title,
      description: editableProduct?.description,
      category: editableProduct?.category,
      price: editableProduct?.price,
    },
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<TProductEditFormFields> = ({
    title,
    description,
    category,
    price,
  }) => {
    if (!editableProduct) return;

    const processedData = {
      ...editableProduct,
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      price: Number(price),
    };

    dispatch(editProduct(processedData));
    onSuccess();
  };

  return (
    <FormProvider {...methods}>
      <Form
        title="Редактирование товара"
        fields={EDIT_PRODUCT_FORM_FIELDS}
        onSubmit={handleSubmit(onSubmit)}
        actions={
          <div className="flex gap-3 mt-2 self-end">
            <Button type="submit" className="bg-green-600">
              Сохранить
            </Button>
            <Button className="bg-red-400" onClick={onCancel}>
              Отменить
            </Button>
          </div>
        }
      />
    </FormProvider>
  );
};
