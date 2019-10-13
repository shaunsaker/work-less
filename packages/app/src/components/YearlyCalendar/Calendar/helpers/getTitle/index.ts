import getMonthFromDate from './getMonthFromDate';

const getTitle = (date: Date) => {
  const month = getMonthFromDate(date);
  const year = date.getFullYear();
  const title = `${month} ${year}`;

  return title;
};

export default getTitle;
