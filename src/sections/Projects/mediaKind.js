const VIDEO_EXTENSIONS = ["webm", "mp4"];
const EXTENSION_PATTERN = /\.([a-z0-9]+)(?:[?#].*)?$/i;

export const MEDIA_KIND = {
  image: "image",
  video: "video",
};

function readExtension(src) {
  return EXTENSION_PATTERN.exec(src)?.[1].toLowerCase() ?? null;
}

export function getMediaKind(src) {
  return VIDEO_EXTENSIONS.includes(readExtension(src))
    ? MEDIA_KIND.video
    : MEDIA_KIND.image;
}
