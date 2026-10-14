const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const UNITS = [
  { unit: "year", duration: YEAR, style: "long" },
  { unit: "month", duration: MONTH, style: "long" },
  { unit: "day", duration: DAY, style: "long" },
  { unit: "hour", duration: HOUR, style: "narrow" },
  { unit: "minute", duration: MINUTE, style: "short" },
];

const SMALLEST_UNIT = { unit: "second", style: "narrow" };
const COMPACT_UNIT = "hour";
const DOTLESS_LANGUAGE = "en";
const NUMBER_UNIT_GAP = /(\d)\s+(?=\p{L})/u;
const ABBREVIATION_DOT = /(\p{L})\./u;

function joinNumberAndUnit(text) {
  return text.replace(NUMBER_UNIT_GAP, "$1");
}

function dropAbbreviationDot(text) {
  return text.replace(ABBREVIATION_DOT, "$1");
}

function formatAmount(amount, { unit, style }, language) {
  const formatter = new Intl.RelativeTimeFormat(language, {
    numeric: "auto",
    style,
  });
  const text = formatter.format(amount, unit);
  const compact = unit === COMPACT_UNIT ? joinNumberAndUnit(text) : text;

  return language === DOTLESS_LANGUAGE ? dropAbbreviationDot(compact) : compact;
}

export function formatRelativeTime(date, language, now = Date.now()) {
  const elapsed = new Date(now).getTime() - new Date(date).getTime();
  const match = UNITS.find(({ duration }) => Math.abs(elapsed) >= duration);

  if (!match) {
    return formatAmount(0, SMALLEST_UNIT, language);
  }

  return formatAmount(-Math.trunc(elapsed / match.duration), match, language);
}
