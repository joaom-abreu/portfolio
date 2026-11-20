import { describe, expect, it } from "vitest";
import { sortByNewest } from "@/shared/lib/sortByNewest.js";

describe("sortByNewest", () => {
  it("orders different dates from newest to oldest", () => {
    const items = [
      { id: "a", date: "2026-09" },
      { id: "b", date: "2026-11" },
      { id: "c", date: "2026-10" },
    ];

    expect(sortByNewest(items).map((item) => item.id)).toEqual(["b", "c", "a"]);
  });

  it("keeps the array order for items with the same date", () => {
    const items = [
      { id: "a", date: "2026-10" },
      { id: "b", date: "2026-10" },
      { id: "c", date: "2026-10" },
    ];

    expect(sortByNewest(items).map((item) => item.id)).toEqual(["a", "b", "c"]);
  });
});
