"use client";

import { FC } from "react";
import { useDispatch, useSelector } from "@/store";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/elements";
import { editProduct, getSelectedProduct } from "@/store/slices";
import { EDIT_PRODUCT_FORM_FIELDS } from "@/shared/constants";
import { TProductEditFormFields, TProductEditFormProps } from "./types";

export const EditProductForm: FC<TProductEditFormProps> = ({
  productId,
  onSuccess,
  onCancel,
}) => {
  const editableProduct = useSelector((state) =>
    getSelectedProduct(state, Number(productId))
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
        title="Редактирование формы"
        fields={EDIT_PRODUCT_FORM_FIELDS}
        onSubmit={handleSubmit(onSubmit)}
        actions={
          <div className="flex gap-2">
            <button type="submit">Сохранить</button>
            <button onClick={onCancel}>Отменить</button>
          </div>
        }
      />
    </FormProvider>
  );
};
