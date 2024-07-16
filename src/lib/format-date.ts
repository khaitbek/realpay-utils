import { format } from "date-fns";

export const formatDate = (
  date: string | null | undefined,
  nullPrefix = "",
) => {
  // if date is null or undefined, we return the nullPrefix
  // for most cases, the nullPrefix is "-"
  if (date === null || date === undefined || date === "") return nullPrefix;

  const DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";

  return format(date, DATE_FORMAT);
};
