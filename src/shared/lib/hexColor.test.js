import { describe, expect, it } from "vitest";
import { formatHexColor, readHexDigits } from "@/shared/lib/hexColor.js";

describe("readHexDigits", () => {
  it("returns the six digits of a full hex color", () => {
    expect(readHexDigits("#7c4dff")).toBe("7c4dff");
  });

  it("expands the short form", () => {
    expect(readHexDigits("#fff")).toBe("ffffff");
    expect(readHexDigits("#a1c")).toBe("aa11cc");
  });

  it("ignores surrounding spaces", () => {
    expect(readHexDigits(" #0c0b10 ")).toBe("0c0b10");
  });

  it("returns null for other formats", () => {
    expect(readHexDigits("rgb(0, 0, 0)")).toBeNull();
    expect(readHexDigits("#12")).toBeNull();
  });
});

describe("formatHexColor", () => {
  it("writes the color in six uppercase digits", () => {
    expect(formatHexColor("#fff")).toBe("#FFFFFF");
    expect(formatHexColor("#0c0b10")).toBe("#0C0B10");
  });

  it("keeps a value that is not a hex color as it is", () => {
    expect(formatHexColor("rgba(6, 5, 9, 0.72)")).toBe("rgba(6, 5, 9, 0.72)");
  });
});
