"use client";

import { ChangeEvent, FC, useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { Modal } from "@/components/elements";
import { Radio } from "@/components/ui";
import { useDispatch, useSelector } from "@/store";
import { getFilter, setCurrentPage, setFilter } from "@/store/slices";
import { TProductFilter } from "@/shared/types";
import { PRODUCT_FILTER } from "@/shared/constants";

export const ProductFilter: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as TProductFilter;
    dispatch(setFilter(value));
    dispatch(setCurrentPage(1));
    handleModalClose();
  };

  return (
    <>
      <button
        className="group p-2.5 bg-neutral-900 rounded-full hover:cursor-pointer hover:opacity-85 active:opacity-75 transition-opacity duration-200"
        onClick={handleModalOpen}
      >
        <MdFilterAlt className="text-xl sm:text-2xl md:text-[1.65rem] group-hover:text-orange-500 transition-colors" />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2 className="text-center text-xl font-medium mb-2">Фильтры</h2>
        <div role="radiogroup" aria-label="Отобразить" className="mb-2">
          <fieldset className="flex flex-col gap-4">
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
          </fieldset>
        </div>
      </Modal>
    </>
  );
};
