import { ROUTES } from "@/config/routes";
import { BackButton, ProductDetails } from "@/components/containers";
import { IoArrowBack } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Детали товара",
  description: "Детали товара",
};

export default function ProductPage() {
  return (
    <div className="py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
      <BackButton
        path={ROUTES.CATALOG}
        className="text-[0.9rem] md:text-base mb-4 sm:mb-6 md:mb-10 lg:mb-20 xl:mb-25 bg-white text-black"
        startIcon={<IoArrowBack className="text-xl" />}
      >
        Вернуться в каталог
      </BackButton>
      <ProductDetails />
    </div>
  );
}
