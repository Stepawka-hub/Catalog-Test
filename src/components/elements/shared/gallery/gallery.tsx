import { FC } from "react";
import Image from "next/image";
import { Slider } from "../slider";
import { TGalleryProps } from "./types";

export const Gallery: FC<TGalleryProps> = ({ name, thumbnail, images }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-neutral-900 rounded-lg">
      <Image
        src={thumbnail}
        width={384}
        height={384}
        className="self-center"
        alt={`${name} - main image`}
      />
      <Slider images={images} />
    </div>
  );
};
