const DAY_MS = 24 * 60 * 60 * 1000;
const ISO_DAY_LENGTH = 10;

export function toIsoDay(date) {
  return new Date(date).toISOString().slice(0, ISO_DAY_LENGTH);
}

export function listRecentDays(count, today) {
  const end = new Date(today).getTime();

  return Array.from({ length: count }, (_, index) =>
    toIsoDay(end - (count - 1 - index) * DAY_MS),
  );
}
