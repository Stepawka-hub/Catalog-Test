import { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import { TImageThumbnailsProps } from "./types";

export const ImageThumbnails: FC<TImageThumbnailsProps> = ({
  images,
  selectedImage,
  onImageClick,
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {images.map((image, idx) => {
        const isActive = image === selectedImage;
        return (
          <Image
            key={idx}
            src={image}
            width={80}
            height={80}
            alt={`Thumbnail ${idx + 1}`}
            className={clsx(
              "rounded-lg border-2 hover:cursor-pointer hover:border-orange-400 transition-colors duration-200",
              !isActive && "border-white",
              isActive && "border-orange-400"
            )}
            onClick={() => onImageClick(image)}
          />
        );
      })}
    </div>
  );
};
