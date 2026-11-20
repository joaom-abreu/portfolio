const MONTH_FORMAT = { month: "long", timeZone: "UTC" };

export function formatMonthLabel(isoMonth, language) {
  const [year, month] = isoMonth.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1));
  const monthName = new Intl.DateTimeFormat(language, MONTH_FORMAT).format(
    date,
  );
  return `${year} · ${monthName}`;
}
