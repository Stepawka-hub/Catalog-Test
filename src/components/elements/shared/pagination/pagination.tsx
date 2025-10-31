import { FC } from "react";
import { TPaginationProps } from "./types";
import clsx from "clsx";

export const Pagination: FC<TPaginationProps> = ({
  currentPage,
  limit,
  totalCount,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(totalCount / limit);
  const firstPage = Math.max(0, currentPage - 4);
  const lastPage = Math.min(pagesCount, currentPage + 3);

  const pages = [];
  for (let i = firstPage; i < lastPage; i++) {
    pages.push(i + 1);
  }

  return (
    <div className="flex justify-center gap-6 mt-8 text-2xl">
      {pages.map((page) => (
        <button
          key={page}
          className={clsx(
            "px-2 py-2 rounded-full",
            page === currentPage && "bg-orange-600"
          )}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
