import type { Metadata } from "next";
import { ProductLayoutClient } from "./client-layout";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог товаров",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen font-sans bg-neutral-800">
      <ProductLayoutClient>{children}</ProductLayoutClient>
    </div>
  );
}
