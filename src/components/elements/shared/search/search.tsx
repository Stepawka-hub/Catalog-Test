"use client";

import { ChangeEvent, FC, useState } from "react";
import { useDebounce } from "@/hooks";
import { CiSearch } from "react-icons/ci";
import { TSearchProps } from "./types";

export const Search: FC<TSearchProps> = ({
  initialValue,
  placeholder = "Введите значение...",
  onChange,
}) => {
  const debouncedSearch = useDebounce(onChange, 1500);
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="group flex items-center gap-1 w-full py-1 px-2 sm:px-3 bg-neutral-900 rounded-lg">
      <CiSearch className="text-[1.75rem] group-focus-within:text-orange-500 transition-colors" />
      <input
        className="w-full py-1 px-1 rounded-lg text-base 
          focus:outline-none caret-orange-500 caret-width-2
          sm:text-lg sm:py-1.5 sm:px-2"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
