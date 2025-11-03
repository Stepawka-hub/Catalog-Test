export type TPagination = {
  currentPage: number;
  limit: number;
  totalCount: number;
};

export type TTimeout = ReturnType<typeof setTimeout> | undefined;

export type TFormField<T> = {
  name: keyof T & string;
  label: string;
  type?: InputTyp;
  placeholder?: string;
  validation?: Record<string, unknown>;
};
