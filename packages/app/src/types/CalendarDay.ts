import DateOfSignificance from './DateOfSignificance';

interface CalendarDay extends Omit<DateOfSignificance, 'date'> {
  day: number | null;
}

export default CalendarDay;
