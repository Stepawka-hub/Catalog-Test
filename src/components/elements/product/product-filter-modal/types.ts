import { TProductFilter } from "@/shared/types";

export type TProductFilterModalProps = {
  isOpen: boolean;
  filter: TProductFilter;
  onClose: () => void;
  onFilterChange: (f: TProductFilter) => void;
};
