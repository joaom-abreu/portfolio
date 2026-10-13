export function sortByDate(items) {
  return items.toSorted((first, second) =>
    first.date.localeCompare(second.date),
  );
}
