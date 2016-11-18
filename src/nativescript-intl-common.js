export const NUMERIC = "numeric";
export const LONG = "long";
export const SHORT = "short";
export const TWODIGIT = "2-digit";
export const FULL = "full";
export class DateTimeFormat {
    constructor(locale, options, pattern) {
        this.locale = locale;
        this.options = options;
        this.pattern = pattern;
        this.dateTimeFormatElements = {
            "M": "month",
            "E": "weekday",
            "c": "weekday",
            "d": "day",
            "y": "year",
            "h": "hour",
            "H": "hour",
            "m": "minute",
            "s": "second",
            "z": "timeZoneName",
            "G": "era",
            "a": "hour12"
        };
        if (options && options.minute === NUMERIC) {
            this.options.minute = TWODIGIT;
        }
        if (options && options.hour === NUMERIC) {
            this.options.hour = TWODIGIT;
        }
    }
    hasTimeOptions(options) {
        return options.hour !== undefined || options.minute !== undefined || options.second !== undefined;
    }
    hasDateOptions(options) {
        return options.weekday !== undefined ||
            options.year !== undefined ||
            options.month !== undefined ||
            options.day !== undefined;
    }
    useFullDatePattern(intlOptions) {
        let i;
        let propsArray = Object.keys(intlOptions);
        let propsArrayLength = propsArray.length;
        let result = false;
        for (i = 0; i < propsArrayLength; i++) {
            if (intlOptions[propsArray[i]] === LONG || intlOptions[propsArray[i]] === SHORT) {
                result = true;
                break;
            }
        }
        return result;
    }
    getNativePattern(patternDefinition, locale) {
        return "";
    }
    getCorrectPatternForLocale() {
        let dateTimePatternOptions = {};
        if (this.hasDateOptions(this.options)) {
            if (this.useFullDatePattern(this.options)) {
                dateTimePatternOptions.date = FULL;
            }
            else {
                dateTimePatternOptions.date = SHORT;
            }
        }
        if (this.hasTimeOptions(this.options)) {
            dateTimePatternOptions.time = FULL;
        }
        let result = this.getNativePattern(dateTimePatternOptions, this.locale);
        if (this.options.hour) {
            if (this.options.hour12 !== undefined) {
                result = this.options.hour12 ? result.replace(/H/g, "h") : result.replace(/h/g, "H");
            }
            else {
                this.options.hour12 = !(result.indexOf("H") > -1);
            }
        }
        return result;
    }
    getDateElementsFromPattern(pattern) {
        let result = [];
        let patternLength = pattern.length;
        let i = 0;
        let stringInsidePattern = false;
        while (i < patternLength) {
            if (pattern[i] === '"' || pattern[i] === "'") {
                let p = i + 1;
                while (p < patternLength && pattern[i] !== pattern[p]) {
                    p++;
                }
                for (let j = i; j < p + 1; j++) {
                    result.push({
                        "isDateElement": false,
                        "patternValue": pattern[j]
                    });
                }
                i = p + 1;
                continue;
            }
            if (this.dateTimeFormatElements.hasOwnProperty(pattern[i])) {
                let j = i;
                while (i < patternLength && pattern[i] === pattern[j]) {
                    i++;
                }
                result.push({
                    "isDateElement": true,
                    "patternValue": pattern.substr(j, i - j),
                    "intlOption": this.dateTimeFormatElements[pattern[j]]
                });
            }
            else {
                result.push({
                    "isDateElement": false,
                    "patternValue": pattern[i]
                });
                i++;
            }
        }
        return result;
    }
    prepareDateElement(intlOption, dateElement) {
        switch (intlOption) {
            case NUMERIC:
                return dateElement;
            case TWODIGIT:
                return dateElement.repeat(2);
            case SHORT:
                return dateElement.repeat(3);
            case LONG:
                return dateElement.repeat(4);
            case true:
                return dateElement;
            case false:
                return "";
            default:
                return dateElement;
        }
    }
    preparePattern(pattern, options) {
        let patternOptions = this.getDateElementsFromPattern(pattern);
        let patternOptionsLength = patternOptions.length;
        for (let i = 0; i < patternOptionsLength; i++) {
            if (patternOptions[i].isDateElement) {
                let formatChar = patternOptions[i].patternValue[0];
                let intlOptionValue = options[patternOptions[i].intlOption];
                if (intlOptionValue !== undefined) {
                    let newPatternValue = this.prepareDateElement(intlOptionValue, formatChar);
                    patternOptions[i].patternValue = newPatternValue;
                }
                else {
                    if (i > 0) {
                        let j = i - 1;
                        while (patternOptions[j] && patternOptions[j].isDateElement === false) {
                            if (patternOptions[j].patternValue !== " ") {
                                if (patternOptions[j].patternValue !== '"' && patternOptions[j].patternValue !== "'") {
                                    patternOptions[j].patternValue = "";
                                }
                                break;
                            }
                            else {
                                patternOptions[j].patternValue = "";
                            }
                            j--;
                        }
                    }
                    patternOptions[i].patternValue = "";
                }
            }
        }
        let result = [];
        let i = 0;
        while (patternOptions[i].patternValue === "" || patternOptions[i].isDateElement === false) {
            i++;
        }
        for (i; i < patternOptionsLength; i++) {
            result.push(patternOptions[i].patternValue);
        }
        return result.join("");
    }
    formatNative(pattern, locale, date) {
        return "";
    }
    get preparedPattern() {
        if (!this._preparedPattern) {
            if (this.pattern) {
                this._preparedPattern = this.pattern;
            }
            else {
                this._preparedPattern = this.preparePattern(this.getCorrectPatternForLocale(), this.options);
            }
        }
        return this._preparedPattern;
    }
    format(date) {
        return this.formatNative(this.preparedPattern, this.locale, date);
    }
}
export class NumberFormat {
    constructor(locale, options, pattern) {
        this.locale = locale;
        this.options = options;
        this.pattern = pattern;
    }
    formatNative(value, locale, options, pattern) {
        return "";
    }
    format(value) {
        return this.formatNative(value, this.locale, this.options, this.pattern);
    }
}
