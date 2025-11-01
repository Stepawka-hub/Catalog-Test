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
    <div className="group flex items-center gap-1 w-full py-1 px-3 bg-neutral-900 rounded-lg">
      <CiSearch
        size="1.75rem"
        className="group-focus-within:text-orange-600 transition-colors"
      />
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full py-2 px-2 rounded-lg text-lg focus:outline-none caret-orange-600 caret-width-2"
      />
    </div>
  );
};
