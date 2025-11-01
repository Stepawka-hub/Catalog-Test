import {
  ProductFilter,
  ProductList,
  ProductSearch,
} from "@/components/containers";

export default function Catalog() {
  return (
    <main className="flex flex-col gap-6 min-h-screen w-full py-16 px-8">
      <div className="flex gap-5 items-center">
        <ProductSearch />
        <ProductFilter />
      </div>
      <ProductList />
    </main>
  );
}
