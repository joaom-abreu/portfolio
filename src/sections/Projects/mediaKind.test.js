import { describe, expect, it } from "vitest";
import { MEDIA_KIND, getMediaKind } from "@/sections/Projects/mediaKind.js";

describe("getMediaKind", () => {
  it.each([
    "/projects/portfolio.png",
    "/projects/portfolio.jpg",
    "/projects/portfolio.webp",
    "/projects/portfolio.avif",
    "/projects/portfolio.gif",
  ])("treats %s as an image", (src) => {
    expect(getMediaKind(src)).toBe(MEDIA_KIND.image);
  });

  it.each(["/projects/portfolio.webm", "/projects/portfolio.mp4"])(
    "treats %s as a video",
    (src) => {
      expect(getMediaKind(src)).toBe(MEDIA_KIND.video);
    },
  );

  it("ignores the letter case of the extension", () => {
    expect(getMediaKind("/projects/portfolio.WEBM")).toBe(MEDIA_KIND.video);
  });

  it("ignores a query string or hash after the file name", () => {
    expect(getMediaKind("/projects/portfolio.webm?v=2")).toBe(MEDIA_KIND.video);
    expect(getMediaKind("/projects/portfolio.png#frame")).toBe(
      MEDIA_KIND.image,
    );
  });

  it("falls back to image when there is no extension", () => {
    expect(getMediaKind("/projects/portfolio")).toBe(MEDIA_KIND.image);
  });
});
