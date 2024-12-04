//TODO - navigation populate logic
//TODO - contacts section
//TODO -  About the product information
//TODO - themes

import { constants } from './constants.js'
import { getCookies } from './cookies.js';
import { generateTemplate, showSpinner } from './template.js';
import { readContent } from './content.js';

let content;
let chosenLanguage = constants.defaultLanguage;

main();
async function main() {
  showSpinner();
  chosenLanguage = await getCookies(constants.cookieTypes.language, chosenLanguage);
  content = await readContent(chosenLanguage);
  generateTemplate(content);
}

