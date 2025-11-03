import { TPagination } from "@/shared/types";

export type TPaginationProps = TPagination & {
  maxPages?: number;
  onPageChange: (p: number) => void;
};
