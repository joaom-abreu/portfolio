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
const COMPACT_UNITS = ["hour", "minute"];
const NUMBER_UNIT_GAP = /(\d)\s+(?=\p{L})/u;
const FORMAT_OPTIONS = { numeric: "auto", style: "narrow" };

function joinNumberAndUnit(text) {
  return text.replace(NUMBER_UNIT_GAP, "$1");
}

export function formatRelativeTime(date, language, now = Date.now()) {
  const formatter = new Intl.RelativeTimeFormat(language, FORMAT_OPTIONS);
  const elapsed = new Date(now).getTime() - new Date(date).getTime();
  const match = UNITS.find(({ duration }) => Math.abs(elapsed) >= duration);

  if (!match) {
    return formatter.format(0, SMALLEST_UNIT);
  }

  const amount = -Math.trunc(elapsed / match.duration);
  const text = formatter.format(amount, match.unit);

  return COMPACT_UNITS.includes(match.unit) ? joinNumberAndUnit(text) : text;
}
