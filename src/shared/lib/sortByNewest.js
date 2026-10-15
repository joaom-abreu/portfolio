export function sortByNewest(items) {
  return items
    .toSorted((first, second) => first.date.localeCompare(second.date))
    .toReversed();
}
