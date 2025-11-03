import { FC } from "react";
import { LoaderIcon } from "@/components/ui";
import { TLoaderProps } from "./types";
import clsx from "clsx";

export const Loader: FC<TLoaderProps> = ({ label, className }) => {
  return (
    <div className="flex flex-col items-center">
      <LoaderIcon className={clsx("w-16 h-16 text-orange-400", className)} />
      {label && <span className="text-base md:text-lg">{label}</span>}
    </div>
  );
};
