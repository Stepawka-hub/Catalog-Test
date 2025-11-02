import { FC, MouseEvent, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TModalProps } from "./types";

export const Modal: FC<TModalProps> = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFadeClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-10"
      onClick={handleFadeClick}
    >
      <div className="relative max-w-lg w-full p-6 bg-zinc-800 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 hover:cursor-pointer hover:opacity-80 active:opacity-70 transition-opacity duration-200"
          onClick={onClose}
        >
          <IoCloseCircleOutline size="2.5rem" />
        </button>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
};
