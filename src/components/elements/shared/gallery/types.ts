export type TGalleryUIProps = {
  name: string;
  images: string[];
  selectedImage: string;
  onImageClick: (image: string) => void;
};
