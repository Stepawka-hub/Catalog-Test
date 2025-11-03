import { TProduct, TProductId } from "@/shared/types";

export type TProductEditFormProps = {
  productId: TProductId;
  onSuccess: () => void;
  onCancel: () => void;
};

export type TProductEditFormFields = Pick<
  TProduct,
  "title" | "description" | "category" | "price"
>;
