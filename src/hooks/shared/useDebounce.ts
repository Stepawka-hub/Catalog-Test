import { useCallback, useRef } from "react";
import { TTimeout } from "@/shared/types";

export type TFunctionWithArgs<Args extends unknown[]> = (...args: Args) => void;

export const useDebounce = <Args extends unknown[]>(
  callback: TFunctionWithArgs<Args>,
  delay: number = 1000
) => {
  const timer = useRef<TTimeout>(null);

  const debouncedFunction = useCallback(
    (...args: Args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedFunction;
};
