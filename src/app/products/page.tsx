import {
  ProductFilter,
  ProductList,
  ProductSearch,
} from "@/components/containers";

export default function Catalog() {
  return (
    <main className="flex flex-col min-h-screen w-full gap-3 sm:gap-4 md:gap-5 py-6 px-3 sm:py-8 sm:px-6 lg:py-12 lg:px-8 bg-neutral-800">
      <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
        <ProductSearch />
        <ProductFilter />
      </div>
      <ProductList />
    </main>
  );
}
