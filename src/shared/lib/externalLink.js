const EXTERNAL_URL_PATTERN = /^https?:\/\//;
const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener" };
const SAME_TAB_LINK_PROPS = {};

export function getLinkProps(href) {
  return EXTERNAL_URL_PATTERN.test(href)
    ? EXTERNAL_LINK_PROPS
    : SAME_TAB_LINK_PROPS;
}
