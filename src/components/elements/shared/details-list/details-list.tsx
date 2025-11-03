import { FC } from "react";
import { TDetailsListProps } from "./types";

export const DetailsList: FC<TDetailsListProps> = ({ items }) => (
  <div className="flex flex-col gap-3">
    {items.map(({ label, value }, idx) => (
      <span key={idx}>
        <span className="text-neutral-400">{label}:</span> {value || "нет"}
      </span>
    ))}
  </div>
);
