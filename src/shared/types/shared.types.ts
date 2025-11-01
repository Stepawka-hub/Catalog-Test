import { Dispatch, SetStateAction } from "react";

export type TPagination = {
  currentPage: number;
  limit: number;
  totalCount: number;
};

export type TTimeout = ReturnType<typeof setTimeout> | undefined;
