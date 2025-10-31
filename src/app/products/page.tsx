import { ProductList } from "@/components/containers";

export default function Catalog() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-neutral-800">
      <main className="flex min-h-screen justify-center w-full py-16 px-8">
        <ProductList />
      </main>
    </div>
  );
}
