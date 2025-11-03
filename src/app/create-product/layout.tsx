import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Создание товара",
  description: "Создание товара",
};

export default function CreateProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen font-sans bg-neutral-800">{children}</div>
  );
}
