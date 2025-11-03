"use client";

import { FC, useEffect } from "react";
import { useDispatch } from "@/store";
import { fetchAllProductsAsync } from "@/store/slices";

export const ProductLayoutClient: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  /*
    Запрашиваем данные один раз в общем layout`е, так как API предоставляет статичные данные,
    а по ТЗ нужно сохранять клиентское состояние (например, лайки).
    В проде для страницы товара стоило бы использовать отдельный эндпоинт
  */
  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return <>{children}</>;
};
