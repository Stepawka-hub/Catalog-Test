"use client";

import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "@/store";
import { getSearchQuery, setSearchQuery } from "@/store/slices";
import { Search } from "@/components/elements";

export const ProductSearch: FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getSearchQuery);

  const onSearchQueryChange = useCallback(
    (searchQuery: string) => {
      dispatch(setSearchQuery(searchQuery));
    },
    [dispatch]
  );

  return (
    <Search
      initialValue={searchQuery}
      placeholder="Введите название товара..."
      onChange={onSearchQueryChange}
    />
  );
};
