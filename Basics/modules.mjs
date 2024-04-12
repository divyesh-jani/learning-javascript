// Two ways to import modules

import { repoInfo } from "./_module_one.mjs";
import { topic, language, Language } from "./_module_two.mjs"; // fileType cannot be used since it is not exported

console.log('-----From Module One-----');
console.log(repoInfo());
// Learning JavaScript today!

console.log('-----From Module Two-----');
console.log('To be specific, learning ' + topic + ' in ' + language + '!');
// To be specific, learning Modules in JavaScript!

let newLanguage = new Language('JavaScript');
console.log(newLanguage.getLanguage + ' is fun to learn and use!');
// JavaScript is fun to learn and use!
