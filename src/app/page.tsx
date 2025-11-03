"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/products");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-800">
      <div className="text-white text-lg">
        Перенаправление на страницу товаров...
      </div>
    </div>
  );
}
