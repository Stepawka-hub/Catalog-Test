import { useEffect, useState } from "react";

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Todo: Есть ли более правильное решение?
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted;
};
