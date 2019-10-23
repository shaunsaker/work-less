import MONTHS from './months';

const getMonthFromDate = (date: Date) => {
  const monthIndex = date.getMonth();
  const month = MONTHS[monthIndex];

  return month;
};

export default getMonthFromDate;
