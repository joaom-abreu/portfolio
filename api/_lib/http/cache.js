const CACHE_HEADER = "Cache-Control";

export const CACHE_POLICY = {
  github: "s-maxage=600, stale-while-revalidate=86400",
  views: "s-maxage=300",
  none: "no-store",
};

export function setCachePolicy(res, policy) {
  res.setHeader(CACHE_HEADER, policy);
}
