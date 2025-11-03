"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { TBackButtonProps } from "./types";
import { Button } from "@/components/ui";
import clsx from "clsx";

export const BackButton: FC<TBackButtonProps> = ({
  path,
  children,
  className,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Button
      className={clsx(
        "text-[0.9rem] md:text-base bg-white text-black",
        className
      )}
      {...props}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
