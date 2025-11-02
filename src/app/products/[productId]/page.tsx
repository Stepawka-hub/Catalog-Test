import { ROUTES } from "@/config/routes";
import { BackButton, ProductDetails } from "@/components/containers";
import { IoArrowBack } from "react-icons/io5";

export default function ProductPage() {
  return (
    <div className="py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
      <BackButton
        path={ROUTES.CATALOG}
        className="mb-10"
        startIcon={<IoArrowBack className="text-xl" />}
      >
        Вернуться в каталог
      </BackButton>
      <ProductDetails />
    </div>
  );
}
