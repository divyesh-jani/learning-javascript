// Module to be imported in modules.mjs

const topic = 'Modules';
const language = 'JavaScript';
const fileType = 'mjs';

export { topic, language };

export class Language {
    constructor() {
        this.language = language;
    }

    get getLanguage() {
        return this.language;
    }
}
