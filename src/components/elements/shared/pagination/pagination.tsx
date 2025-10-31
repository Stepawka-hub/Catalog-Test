import { FC } from "react";
import { TPaginationProps } from "./types";
import clsx from "clsx";

export const Pagination: FC<TPaginationProps> = ({
  currentPage,
  limit,
  totalCount,
  maxPages = 8,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(totalCount / limit);

  let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  let endPage = startPage + maxPages - 1;

  if (endPage > pagesCount) {
    endPage = pagesCount;
    startPage = Math.max(1, endPage - maxPages + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) pages.push(i);

  return (
    <div className="flex justify-center gap-3 mt-8 text-2xl">
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            className={clsx(
              "w-12 h-12 rounded-full bg-neutral-900 hover:cursor-pointer",
              !isActive &&
                "hover:opacity-85 active:opacity-75 transition duration-200 ease-in-out",
              isActive && "bg-orange-600"
            )}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
