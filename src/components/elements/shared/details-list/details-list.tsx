import { FC } from "react";
import { TDetailsListProps } from "./types";

export const DetailsList: FC<TDetailsListProps> = ({ items }) => (
  <div className="flex flex-col gap-3">
    {items.map(({ label, value }, idx) => (
      <span key={idx} className="text-[0.9rem] sm:text-base">
        <span className="text-neutral-400">{label}:</span> {value || "нет"}
      </span>
    ))}
  </div>
);
