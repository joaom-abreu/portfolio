function createProbe(theme) {
  const probe = document.createElement("div");

  probe.hidden = true;

  if (theme) {
    probe.dataset.theme = theme;
  }

  return probe;
}

export function readTokens(names, theme) {
  const probe = createProbe(theme);

  document.body.append(probe);

  const style = getComputedStyle(probe);
  const values = Object.fromEntries(
    names.map((name) => [name, style.getPropertyValue(name).trim()]),
  );

  probe.remove();

  return values;
}
