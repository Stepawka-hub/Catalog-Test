import { FC } from "react";
import Image from "next/image";
import { TGalleryUIProps } from "./types";
import { ImageThumbnails } from "../image-thumbnails";

export const GalleryUI: FC<TGalleryUIProps> = ({
  name,
  images,
  selectedImage,
  onImageClick,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-neutral-900 rounded-lg">
      <Image
        src={selectedImage}
        width={384}
        height={384}
        className="self-center"
        alt={`${name} - main image`}
      />
      <ImageThumbnails
        images={images}
        selectedImage={selectedImage}
        onImageClick={onImageClick}
      />
    </div>
  );
};
