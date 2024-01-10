export const dateStringToDate = (dateString: string): Date => {
  let [day, month, year] = dateString
    .split("/")
    .map((stringValue: string): number => parseInt(stringValue));

  // Date constructer => (year, index_of_month, day)
  return new Date(year, month - 1, day);
};
