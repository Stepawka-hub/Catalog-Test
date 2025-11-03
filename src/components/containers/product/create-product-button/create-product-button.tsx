"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { IconButton } from "@/components/ui";
import { FaPlus } from "react-icons/fa6";

export const CreateProductButton: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.CREATE_PRODUCT);
  };

  return (
    <IconButton
      className="group p-2.5 bg-neutral-900 rounded-full hover:cursor-pointer hover:opacity-85 active:opacity-75 transition-opacity duration-200"
      onClick={handleClick}
    >
      <FaPlus className="text-xl sm:text-2xl md:text-[1.65rem] group-hover:text-green-500 transition-colors" />
    </IconButton>
  );
};
