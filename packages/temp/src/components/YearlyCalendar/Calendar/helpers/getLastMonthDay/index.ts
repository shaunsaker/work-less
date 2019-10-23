const getLastMonthDay = (date: Date) => {
  const lastMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return lastMonthDay;
};

export default getLastMonthDay;
