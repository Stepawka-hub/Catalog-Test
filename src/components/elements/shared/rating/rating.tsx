import { FC } from "react";
import { TRatingProps } from "./types";
import { IoIosStar } from "react-icons/io";

export const Rating: FC<TRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1 items-center">
      <IoIosStar className="mb-0.5 text-orange-400 text-[1.05rem]" />
      <span className="text-sm lg:text-base">{rating}</span>
    </div>
  );
};
