const COORDINATE_DECIMALS = 1;
const POINT_SEPARATOR = " ";
const SINGLE_POINT_STEP = 0;

function round(value) {
  return Number(value.toFixed(COORDINATE_DECIMALS));
}

function buildPoints(values, { width, height, padding }) {
  const highest = Math.max(...values);
  const step =
    values.length > 1 ? width / (values.length - 1) : SINGLE_POINT_STEP;
  const baseline = height - padding;
  const drawableHeight = height - 2 * padding;

  return values.map((value, index) => {
    const ratio = highest > 0 ? value / highest : 0;

    return [round(index * step), round(baseline - ratio * drawableHeight)];
  });
}

export function buildSparkline(values, size) {
  if (values.length === 0) {
    return { linePoints: "", areaPath: "" };
  }

  const points = buildPoints(values, size);
  const pairs = points.map(([x, y]) => `${x},${y}`);
  const lastX = points.at(-1)[0];

  return {
    linePoints: pairs.join(POINT_SEPARATOR),
    areaPath: `M0,${size.height} L${pairs.join(" L")} L${lastX},${size.height} Z`,
  };
}
