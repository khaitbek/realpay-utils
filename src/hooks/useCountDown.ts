import { useEffect, useState } from "react";

export const useCountDown  = (initialSecond: number) => {
  const [timer, setTimer] = useState(initialSecond);

  useEffect(() => {
    const timerInt: ReturnType<typeof setInterval> | null =
      timer > 0 ? setInterval(() => setTimer((prevTime) => prevTime - 1), 1000) : null;
    return () => {
      if (timerInt) clearInterval(timerInt);
    };
  }, [timer]);

  return { timer, setTimer };
};
