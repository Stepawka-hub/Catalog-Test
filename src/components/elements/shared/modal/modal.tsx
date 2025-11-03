"use client";

import { FC, MouseEvent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@/hooks";
import { CSSTransition } from "react-transition-group";
import { TModalProps } from "./types";
import { IoCloseCircleOutline } from "react-icons/io5";

export const Modal: FC<TModalProps> = ({ isOpen, children, onClose }) => {
  const nodeRef = useRef(null);
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

  const handleFadeClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return mounted
    ? createPortal(
        <CSSTransition
          in={isOpen}
          nodeRef={nodeRef}
          timeout={500}
          classNames={{
            enter: "opacity-0 scale-95",
            enterActive: "opacity-100 scale-100 transition duration-500",
            exitActive: "opacity-0 scale-95 transition duration-500",
          }}
          unmountOnExit
        >
          <div
            ref={nodeRef}
            className="fixed inset-0 flex items-center justify-center z-10 backdrop-blur-xs"
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
          </div>
        </CSSTransition>,
        document.querySelector("#modals")!
      )
    : null;
};
