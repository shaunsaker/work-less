const MS_PER_DAY = 1000 * 60 * 60 * 24;

const getTomorrow = (date: Date) => {
  const tomorrow = new Date(date.getTime() + MS_PER_DAY);

  return tomorrow;
};

export default getTomorrow;
