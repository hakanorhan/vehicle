/**
 * supported language.
 * All supported languages are registered in {I18Initializer.js}
 */
export default class supportedLanguages {
    constructor(fullName, shortName) {
        this.fullName = fullName;
        this.shortName = shortName
    }

    fullName() {
        return this.fullName
    }

    shortName() {
        return this.shortName
    }
}