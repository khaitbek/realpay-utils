import { type RefObject, useEffect } from "react";

export const useFocus = (ref?: RefObject<HTMLInputElement>, isFocus?: boolean) => {
  useEffect(() => {
    if (isFocus && ref?.current) {
      ref.current.focus();
    }
  }, [ref, isFocus]);
};
