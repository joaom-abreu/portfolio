const RESUME_DIRECTORY = "/cv";

const RESUME_FILE_NAMES = {
  pt: "cv-pt.pdf",
  en: "cv-en.pdf",
};

export function getResume(language) {
  const fileName = RESUME_FILE_NAMES[language];

  return { fileName, url: `${RESUME_DIRECTORY}/${fileName}` };
}
