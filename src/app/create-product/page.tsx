import { BackButton, CreateProductForm } from "@/components/containers";
import { ROUTES } from "@/config/routes";
import { IoArrowBack } from "react-icons/io5";

export default function CreateProduct() {
  return (
    <main className="py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
      <BackButton
        path={ROUTES.CATALOG}
        className="mb-4 sm:mb-6"
        startIcon={<IoArrowBack className="text-xl" />}
      >
        Вернуться в каталог
      </BackButton>
      <div className="max-w-200 mx-auto">
        <CreateProductForm />
      </div>
    </main>
  );
}
