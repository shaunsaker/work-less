const weeks = [
  [
    { day: null },
    { day: null },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5, isDisabled: true },
  ],
  [
    { day: 6, isDisabled: true },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12, isDisabled: true },
  ],
  [
    { day: 13, isDisabled: true },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17, tooltip: 'Heritage Day', isSecondary: true },
    { day: 18, isPrimary: true },
    { day: 19, isDisabled: true },
  ],
  [
    { day: 20, isDisabled: true },
    { day: 21, isPrimary: true },
    { day: 22, tooltip: 'Christmas Day', isSecondary: true },
    { day: 23, isPrimary: true },
    { day: 24, isPrimary: true },
    { day: 25, isPrimary: true },
    { day: 26, isDisabled: true },
  ],
  [
    { day: 27, isDisabled: true },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: null },
    { day: null },
  ],
];

export default weeks;
