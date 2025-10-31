import { TPagination } from "@/shared/types";

export type TPaginationProps = TPagination & {
  onPageChange: (p: number) => void;
};
