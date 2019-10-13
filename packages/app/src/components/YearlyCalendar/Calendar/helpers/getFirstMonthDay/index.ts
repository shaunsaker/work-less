const getFirstMonthDay = (date: Date) => {
  const firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1);

  return firstMonthDay;
};

export default getFirstMonthDay;
