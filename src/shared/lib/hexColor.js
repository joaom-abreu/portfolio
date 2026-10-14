const HEX_COLOR_PATTERN = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
const SHORT_HEX_LENGTH = 3;
const HEX_PREFIX = "#";

function expandShortHex(digits) {
  return [...digits].map((digit) => digit + digit).join("");
}

export function readHexDigits(color) {
  const match = HEX_COLOR_PATTERN.exec(color.trim());

  if (!match) {
    return null;
  }

  return match[1].length === SHORT_HEX_LENGTH
    ? expandShortHex(match[1])
    : match[1];
}

export function formatHexColor(color) {
  const digits = readHexDigits(color);

  return digits ? `${HEX_PREFIX}${digits.toUpperCase()}` : color;
}
