const MS_PER_DAY = 1000 * 60 * 60 * 24;

const getNumberOfDaysBetweenDates = (date1: Date, date2: Date) => {
  const time1 = date1.getTime();
  const time2 = date2.getTime();
  const timeDifference = Math.abs(time1 - time2);
  const daysDifference = Math.ceil(timeDifference / MS_PER_DAY);
  const numberOfDaysInMonth = daysDifference + 1;

  return numberOfDaysInMonth;
};

export default getNumberOfDaysBetweenDates;
