import { useCallback, useEffect } from "react";

type setIsRequestEnabled = (state: boolean) => void;

export const useRequestOnEnter = (shouldFilter: boolean, setIsRequestEnabled: setIsRequestEnabled) => {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key == "Enter" && shouldFilter) {
        setIsRequestEnabled(true);
      }
    },
    [shouldFilter, setIsRequestEnabled],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};
