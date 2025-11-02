import { ROUTES } from "@/config/routes";
import { BackButton, ProductDetails } from "@/components/containers";

export default function ProductPage() {
  return (
    <div className="py-2 px-2 sm:py-3 sm:px-3 lg:py-4 lg:px-4">
      <BackButton path={ROUTES.CATALOG}>Вернуться в каталог</BackButton>
      <ProductDetails />
    </div>
  );
}
