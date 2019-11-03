import getMonthFromDate from './getMonthFromDate';

const getMonthYearString = (date: Date) => {
  const month = getMonthFromDate(date);
  const year = date.getFullYear();
  const title = `${month} ${year}`;

  return title;
};

export default getMonthYearString;
