/*
 * Creates an array of dates between start and end dates
 */
const getDateArray = function(startDate: Date, endDate: Date) {
  const array = new Array();
  const date = new Date(startDate);

  while (date <= endDate) {
    array.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return array;
};

export { getDateArray };
