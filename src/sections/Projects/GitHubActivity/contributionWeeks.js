const DAYS_IN_WEEK = 7;
const EMPTY_LEVEL = 0;

export const CALENDAR_WEEK_COUNT = 53;
export const COMPACT_WEEK_COUNT = 17;

function countLeadingBlanks(days) {
  return new Date(days[0].date).getUTCDay();
}

function splitIntoWeeks(cells) {
  const weekCount = Math.ceil(cells.length / DAYS_IN_WEEK);

  return Array.from({ length: weekCount }, (_, index) =>
    cells.slice(index * DAYS_IN_WEEK, (index + 1) * DAYS_IN_WEEK),
  );
}

export function takeLatestWeeks(weeks, count) {
  return weeks.slice(-count);
}

export function buildContributionWeeks(days) {
  if (days.length === 0) {
    return [];
  }

  const blanks = Array.from({ length: countLeadingBlanks(days) }, () => null);
  const weeks = splitIntoWeeks([...blanks, ...days]);

  return takeLatestWeeks(weeks, CALENDAR_WEEK_COUNT);
}

export function buildPlaceholderWeeks() {
  return Array.from({ length: CALENDAR_WEEK_COUNT }, () =>
    Array.from({ length: DAYS_IN_WEEK }, () => ({ level: EMPTY_LEVEL })),
  );
}
