const DESCRIPTION_SELECTOR = 'meta[name="description"]';

export function applyDocumentMeta(translate) {
  document.title = translate("meta.title");
  document
    .querySelector(DESCRIPTION_SELECTOR)
    ?.setAttribute("content", translate("meta.description"));
}
