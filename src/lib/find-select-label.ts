import { memoize } from "./memoize";

export const findSelectLabel = memoize(
  (
    value: string,
    list: Array<{
      key: string;
      value: string;
    }> = [],
  ) => {
    if (list.length === 0) return "-";
    const findLabel = list?.find((item) => item.key === value)?.value ?? "-";
    return findLabel;
  },
);
