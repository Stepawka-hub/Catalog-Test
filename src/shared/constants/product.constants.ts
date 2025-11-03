import {
  maxLengthValidation,
  minValueValidation,
  requiredValidation,
} from "../helpers";
import { TFormField, TProduct, TProductFilter } from "../types";

export const PRODUCT_HIGH_RATING = 4.5;
const MAX_PRODUCT_NAME_LENGTH = 128;
const MAX_PRODUCT_DESCRIPTION_LENGTH = 255;
const MAX_PRODUCT_CATEGORY_LENGTH = 32;

export const PRODUCT_FIELDS: (keyof TProduct)[] = [
  "id",
  "title",
  "description",
  "category",
  "price",
  "rating",
  "stock",
  "brand",
  "sku",
  "thumbnail",
  "images",
] as const;

export const PRODUCT_FILTER: Record<string, TProductFilter> = {
  ALL: "all",
  FAVORITES: "favorites",
  HIGH_RATING: "high rating",
} as const;

export const EDIT_PRODUCT_FORM_FIELDS: TFormField<TProduct>[] = [
  {
    name: "title",
    label: "Название",
    placeholder: "Название",
    type: "text",
    validation: {
      ...requiredValidation(),
      ...maxLengthValidation(MAX_PRODUCT_NAME_LENGTH),
    },
  },
  {
    name: "description",
    label: "Описание",
    placeholder: "Описание",
    type: "text",
    validation: {
      ...requiredValidation(),
      ...maxLengthValidation(MAX_PRODUCT_DESCRIPTION_LENGTH),
    },
  },
  {
    name: "category",
    label: "Категория",
    placeholder: "Категория",
    type: "text",
    validation: {
      ...requiredValidation(),
      ...maxLengthValidation(MAX_PRODUCT_CATEGORY_LENGTH),
    },
  },
  {
    name: "price",
    label: "Цена",
    placeholder: "Цена",
    type: "number",
    validation: {
      ...requiredValidation(),
      ...minValueValidation(0, "Цена должна быть положительным числом"),
    },
  },
] as const;
