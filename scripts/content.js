import { setCookie } from './cookies.js';
import { generateTemplate, showSpinner } from './template.js';
import { constants } from './constants.js'
window.changeLanguage = changeLanguage;

export async function readContent(chosenLanguage) {
  try {
    let contentLink = `${constants.contentAssetOrigin}${chosenLanguage}${constants.contentJsonFile}`;
    const response = await fetch(contentLink);

    if (!response.ok) {
      throw new Error(`${constants.httpError} ${response.status}`);
    }

    const content = await response.json();
    return content;
  } catch (error) {
    console.error(constants.fetchingError, error);
  }
}

async function changeLanguage(lang) {
  showSpinner();
  document.querySelector(constants.sideNavigationIdentifier).classList.remove(constants.show);
  let chosenLanguage = lang.value;
  let content = await readContent(chosenLanguage);
  setCookie(constants.cookieTypes.language, chosenLanguage);
  generateTemplate(content);
}

