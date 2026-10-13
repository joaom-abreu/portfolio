export const ROUTES = {
  home: "/",
  design: "/design",
};

export const TOP_LOCATION = { hash: "#top" };

export function getSectionLocation(sectionId) {
  return { pathname: ROUTES.home, hash: `#${sectionId}` };
}
