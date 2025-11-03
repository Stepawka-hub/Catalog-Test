import {
  maxLengthValidation,
  minLengthValidation,
  minValueValidation,
  requiredValidation,
} from "../helpers";
import { TFormField, TProduct, TProductFilter } from "../types";
import { URL_REGEX } from "./validation.constants";

export const PRODUCT_HIGH_RATING = 4.5;
const MAX_PRODUCT_NAME_LENGTH = 128;
const MAX_PRODUCT_DESCRIPTION_LENGTH = 255;
const MIN_PRODUCT_DESCRIPTION_LENGTH = 16;
const MAX_PRODUCT_CATEGORY_LENGTH = 32;
const MAX_PRODUCT_BREND_LENGTH = 64;

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

const BASE_PRODUCT_FIELDS: TFormField<TProduct>[] = [
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
      ...minLengthValidation(MIN_PRODUCT_DESCRIPTION_LENGTH),
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
      ...minValueValidation(1, "Цена должна быть положительным числом"),
    },
  },
] as const;

export const EDIT_PRODUCT_FORM_FIELDS: TFormField<TProduct>[] = [
  ...BASE_PRODUCT_FIELDS,
];

export const CREATE_PRODUCT_FORM_FIELDS: TFormField<TProduct>[] = [
  ...BASE_PRODUCT_FIELDS,
  {
    name: "stock",
    label: "В наличии",
    placeholder: "Количество",
    type: "number",
    validation: {
      ...requiredValidation(),
      ...minValueValidation(1, "Количество должно быть положительным числом"),
      pattern: {
        value: /^\d+$/,
        message: "Введите целое число",
      },
    },
  },
  {
    name: "brand",
    label: "Бренд",
    placeholder: "Бренд",
    type: "string",
    validation: {
      ...maxLengthValidation(MAX_PRODUCT_BREND_LENGTH),
    },
  },
  {
    name: "thumbnail",
    label: "Ссылка на изображение",
    placeholder: "https://example.com/image.jpg",
    type: "url",
    validation: {
      ...requiredValidation(),
      pattern: {
        value: URL_REGEX,
        message: "Введите корректную ссылку",
      },
    },
  },
];
