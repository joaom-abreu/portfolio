import { afterEach, describe, expect, it, vi } from "vitest";
import {
  readInitialLanguage,
  writeLanguageToUrl,
} from "@/shared/lib/language.js";

const SITE_URL = "https://joaomario.dev/";

function stubBrowser(browserLanguage, url = SITE_URL) {
  const replaceState = vi.fn();

  vi.stubGlobal("navigator", { language: browserLanguage });
  vi.stubGlobal("window", {
    location: new URL(url),
    history: { state: null, replaceState },
  });

  return replaceState;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("readInitialLanguage", () => {
  it("uses the language from the URL", () => {
    stubBrowser("pt-BR", `${SITE_URL}?lang=en`);
    expect(readInitialLanguage()).toBe("en");
  });

  it("uses the browser language when the URL has none", () => {
    stubBrowser("en-US");
    expect(readInitialLanguage()).toBe("en");
  });

  it("falls back to Portuguese for an unsupported browser language", () => {
    stubBrowser("fr-FR");
    expect(readInitialLanguage()).toBe("pt");
  });

  it("falls back to Portuguese when the browser has no language", () => {
    stubBrowser(undefined);
    expect(readInitialLanguage()).toBe("pt");
  });
});

describe("writeLanguageToUrl", () => {
  it("removes the parameter when the language matches the browser", () => {
    const replaceState = stubBrowser("en-US", `${SITE_URL}?lang=en`);
    writeLanguageToUrl("en");
    expect(replaceState.mock.calls[0][2].search).toBe("");
  });

  it("keeps the parameter when the language differs from the browser", () => {
    const replaceState = stubBrowser("en-US");
    writeLanguageToUrl("pt");
    expect(replaceState.mock.calls[0][2].search).toBe("?lang=pt");
  });
});
