import { ChangeEvent, FC } from "react";
import { TProductFilterModalProps } from "./types";
import { TProductFilter } from "@/shared/types";
import { Modal } from "@/components/elements";
import { Radio } from "@/components/ui";
import { PRODUCT_FILTER } from "@/shared/constants";

export const ProductFilterModal: FC<TProductFilterModalProps> = ({
  isOpen,
  filter,
  onClose,
  onFilterChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as TProductFilter;
    onFilterChange(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-center text-xl sm:text-2xl font-medium mb-6">
        Фильтры
      </h2>
      <div role="radiogroup" aria-label="Отобразить" className="mb-2">
        <fieldset className="flex flex-col gap-6">
          <Radio
            id={PRODUCT_FILTER.ALL}
            name="filter"
            label="Все товары"
            value={PRODUCT_FILTER.ALL}
            onChange={handleChange}
            checked={filter === PRODUCT_FILTER.ALL}
          />
          <Radio
            id={PRODUCT_FILTER.FAVORITES}
            name="filter"
            label="Избранное"
            value={PRODUCT_FILTER.FAVORITES}
            onChange={handleChange}
            checked={filter === PRODUCT_FILTER.FAVORITES}
          />
          <Radio
            id={PRODUCT_FILTER.HIGH_RATING}
            name="filter"
            label="Высокий рейтинг"
            value={PRODUCT_FILTER.HIGH_RATING}
            onChange={handleChange}
            checked={filter === PRODUCT_FILTER.HIGH_RATING}
          />
        </fieldset>
      </div>
    </Modal>
  );
};
