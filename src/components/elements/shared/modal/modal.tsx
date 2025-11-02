"use client";

import { FC, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@/hooks";
import { TModalProps } from "./types";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Modal: FC<TModalProps> = ({ isOpen, children, onClose }) => {
  const mounted = useMounted();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = isOpen ? "hidden" : "unset";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFadeClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return mounted
    ? createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-10"
          onClick={handleFadeClick}
        >
          <div className="relative max-w-lg w-full p-6 mx-4 bg-zinc-800 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 hover:cursor-pointer hover:opacity-80 active:opacity-70 transition-opacity duration-200"
              onClick={onClose}
            >
              <IoCloseCircleOutline size="2.5rem" />
            </button>
            <div className="mt-1">{children}</div>
          </div>
        </div>,
        document.querySelector("#modals")!
      )
    : null;
};
