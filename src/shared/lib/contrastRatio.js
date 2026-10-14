import { readHexDigits } from "@/shared/lib/hexColor.js";

const HEX_RADIX = 16;
const CHANNEL_MAX = 255;
const CHANNEL_HEX_LENGTH = 2;
const LINEAR_THRESHOLD = 0.03928;
const LINEAR_DIVISOR = 12.92;
const GAMMA_OFFSET = 0.055;
const GAMMA_DIVISOR = 1.055;
const GAMMA_EXPONENT = 2.4;
const CHANNEL_WEIGHTS = [0.2126, 0.7152, 0.0722];
const LUMINANCE_OFFSET = 0.05;

function parseHexColor(color) {
  const digits = readHexDigits(color);

  if (!digits) {
    return null;
  }

  return CHANNEL_WEIGHTS.map((_, index) => {
    const start = index * CHANNEL_HEX_LENGTH;

    return Number.parseInt(
      digits.slice(start, start + CHANNEL_HEX_LENGTH),
      HEX_RADIX,
    );
  });
}

function toLinear(channel) {
  const value = channel / CHANNEL_MAX;

  return value <= LINEAR_THRESHOLD
    ? value / LINEAR_DIVISOR
    : ((value + GAMMA_OFFSET) / GAMMA_DIVISOR) ** GAMMA_EXPONENT;
}

function relativeLuminance(channels) {
  return channels.reduce(
    (sum, channel, index) => sum + toLinear(channel) * CHANNEL_WEIGHTS[index],
    0,
  );
}

export function contrastRatio(firstColor, secondColor) {
  const first = parseHexColor(firstColor);
  const second = parseHexColor(secondColor);

  if (!first || !second) {
    return null;
  }

  const [lighter, darker] = [first, second]
    .map(relativeLuminance)
    .toSorted((a, b) => b - a);

  return (lighter + LUMINANCE_OFFSET) / (darker + LUMINANCE_OFFSET);
}
