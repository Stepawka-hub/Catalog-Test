"use client";

import { FC, useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { ProductFilterModal } from "@/components/elements";
import { useDispatch, useSelector } from "@/store";
import { getFilter, setCurrentPage, setFilter } from "@/store/slices";
import { TProductFilter } from "@/shared/types";
import { IconButton } from "@/components/ui";

export const ProductFilter: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onFilterChange = (value: TProductFilter) => {
    dispatch(setFilter(value));
    dispatch(setCurrentPage(1));
    onModalClose();
  };

  return (
    <>
      <IconButton
        className="group p-2.5 bg-neutral-900 rounded-full hover:cursor-pointer hover:opacity-85 active:opacity-75 transition-opacity duration-200"
        onClick={onModalOpen}
      >
        <MdFilterAlt className="text-xl sm:text-2xl md:text-[1.65rem] group-hover:text-orange-500 transition-colors" />
      </IconButton>
      <ProductFilterModal
        isOpen={isModalOpen}
        filter={filter}
        onFilterChange={onFilterChange}
        onClose={onModalClose}
      />
    </>
  );
};
