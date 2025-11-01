import { ProductList, ProductSearch } from "@/components/containers";

export default function Catalog() {
  return (
    <main className="flex flex-col justify-center gap-6 min-h-screen w-full py-16 px-8">
      <ProductSearch />
      <ProductList />
    </main>
  );
}
