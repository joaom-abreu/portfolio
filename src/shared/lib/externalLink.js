const EXTERNAL_URL_PATTERN = /^https?:\/\//;
const SAME_TAB_LINK_PROPS = {};

export const NEW_TAB_LINK_PROPS = { target: "_blank", rel: "noopener" };

export function getLinkProps(href) {
  return EXTERNAL_URL_PATTERN.test(href)
    ? NEW_TAB_LINK_PROPS
    : SAME_TAB_LINK_PROPS;
}
