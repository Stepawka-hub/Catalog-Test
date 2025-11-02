"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { TBackButtonProps } from "./types";
import { Button } from "@/components/ui";

export const BackButton: FC<TBackButtonProps> = ({
  path,
  children,
  ...props
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
};
