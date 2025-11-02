import { FC } from "react";
import Image from "next/image";
import { TSliderProps } from "./types";

export const Slider: FC<TSliderProps> = ({ images }) => {
  return (
    <div className="flex gap-2">
      {images.map((image, idx) => (
        <Image
          key={idx}
          src={image}
          width={96}
          height={96}
          alt={`Slider image ${idx + 1}`}
        />
      ))}
    </div>
  );
};
