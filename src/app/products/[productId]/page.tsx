import { ROUTES } from "@/config/routes";
import { BackButton } from "@/components/containers";

export default function ProductPage() {
  return (
    <div>
      <BackButton path={ROUTES.CATALOG}>Вернуться в каталог</BackButton>
      <p>Страница товара</p>
    </div>
  );
}
