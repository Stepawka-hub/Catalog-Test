"use client";

import { FC, useState } from "react";
import { TGalleryProps } from "./types";
import { GalleryUI } from "@/components/elements";

export const Gallery: FC<TGalleryProps> = ({ name, images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <GalleryUI
      name={name}
      images={images}
      selectedImage={selectedImage}
      onImageClick={handleImageClick}
    />
  );
};
