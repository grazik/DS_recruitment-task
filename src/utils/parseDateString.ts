import { isDate, parse } from "date-fns";

export const parseDateString = (
  value: string | Date,
  formatString = "yyyy-MM-dd"
) => {
  if (isDate(value)) {
    return value as Date;
  }

  return parse(value as string, formatString, new Date());
};
