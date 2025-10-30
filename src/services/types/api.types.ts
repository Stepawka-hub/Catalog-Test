export type TBaseListResponse = {
  total: number;
  skip: number;
  limit: number;
};

export type TListResponse<T, K extends string = "data"> = TBaseListResponse & {
  [key in K]: T[];
};
