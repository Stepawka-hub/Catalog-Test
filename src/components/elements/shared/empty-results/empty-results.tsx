import { FC } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TEmptyResultsProps } from "./types";
import clsx from "clsx";

export const EmptyResults: FC<TEmptyResultsProps> = ({
  label = "Ничего не найдено",
  className,
}) => {
  return (
    <div className={clsx("flex flex-col items-center gap-2", className)}>
      <FaMagnifyingGlass className="text-3xl sm:text-4xl" />
      <p className="text-base text-center sm:text-lg">{label}</p>
    </div>
  );
};
