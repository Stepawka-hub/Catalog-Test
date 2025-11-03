"use client";

import { FC, useEffect } from "react";
import { useDispatch } from "@/store";
import { fetchAllProductsAsync } from "@/store/slices";

export const RootLayoutClient: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  /*
    Note: Запрашиваем данные один раз в общем слое, так как API предоставляет статичные данные,
    а по ТЗ нужно сохранять прочее клиентское состояние (например, лайки)
    В проде для той же страницы товара стоило бы использовать отдельный эндпоинт
  */
  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return <>{children}</>;
};
