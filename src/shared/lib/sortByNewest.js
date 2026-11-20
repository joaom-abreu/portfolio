export function sortByNewest(items) {
  return items.toSorted((first, second) =>
    second.date.localeCompare(first.date),
  );
}
