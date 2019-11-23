import PublicHoliday from './PublicHoliday';

interface DateOfSignificance extends Omit<PublicHoliday, 'id' | 'name'> {
  type: 'default' | 'publicHoliday' | 'leaveDay' | 'weekend';
  name?: string;
}

export default DateOfSignificance;
