const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const UNITS = [
  { unit: "year", duration: YEAR },
  { unit: "month", duration: MONTH },
  { unit: "day", duration: DAY },
  { unit: "hour", duration: HOUR },
  { unit: "minute", duration: MINUTE },
];

const SMALLEST_UNIT = "second";
const FORMAT_OPTIONS = { numeric: "auto", style: "narrow" };

export function formatRelativeTime(date, language, now = Date.now()) {
  const formatter = new Intl.RelativeTimeFormat(language, FORMAT_OPTIONS);
  const elapsed = new Date(now).getTime() - new Date(date).getTime();
  const match = UNITS.find(({ duration }) => Math.abs(elapsed) >= duration);

  if (!match) {
    return formatter.format(0, SMALLEST_UNIT);
  }

  return formatter.format(-Math.trunc(elapsed / match.duration), match.unit);
}
