const weeks = [
  [
    { day: null },
    { day: null },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5, type: 'weekend' },
  ],
  [
    { day: 6, type: 'weekend' },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12, type: 'weekend' },
  ],
  [
    { day: 13, type: 'weekend' },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17, tooltip: 'Heritage Day', type: 'publicHoliday' },
    { day: 18, type: 'leaveDay' },
    { day: 19, type: 'weekend' },
  ],
  [
    { day: 20, type: 'weekend' },
    { day: 21, type: 'leaveDay' },
    { day: 22, tooltip: 'Christmas Day', type: 'publicHoliday' },
    { day: 23, type: 'leaveDay' },
    { day: 24, type: 'leaveDay' },
    { day: 25, type: 'leaveDay' },
    { day: 26, type: 'weekend' },
  ],
  [
    { day: 27, type: 'weekend' },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: null },
    { day: null },
  ],
];

export default weeks;
