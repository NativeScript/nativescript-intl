import { DateTimeFormat as commonDateTimeFormat, NumberFormat as commonNumberFormat, FULL } from "./nativescript-intl-common";
export class DateTimeFormat extends commonDateTimeFormat {
    getNativePattern(patternDefinition, locale) {
        let dateFormatter = NSDateFormatter.new();
        if (locale) {
            dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        if (patternDefinition.date) {
            dateFormatter.dateStyle = patternDefinition.date === FULL ?
                4 :
                1;
        }
        if (patternDefinition.time) {
            dateFormatter.timeStyle = 3;
        }
        return dateFormatter.dateFormat;
    }
    formatNative(pattern, locale, date) {
        let dateFormatter = NSDateFormatter.new();
        if (locale) {
            dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        dateFormatter.dateFormat = pattern;
        return dateFormatter.stringFromDate(date ? date : new Date());
    }
}
export class NumberFormat extends commonNumberFormat {
    formatNative(value, locale, options, pattern) {
        let numberFormat = NSNumberFormatter.new();
        if (locale) {
            numberFormat.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        if (options) {
            switch (options.style.toLowerCase()) {
                case "decimal":
                    numberFormat.numberStyle = 1;
                    break;
                case "percent":
                    numberFormat.numberStyle = 3;
                    break;
                case "currency":
                    numberFormat.numberStyle = 2;
                    if (options.currency !== void 0) {
                        numberFormat.currencyCode = options.currency;
                    }
                    break;
                default:
                    numberFormat.numberStyle = 1;
                    break;
            }
        }
        else {
            numberFormat.numberStyle = 1;
        }
        if (options && options.minimumIntegerDigits !== void 0) {
            numberFormat.minimumIntegerDigits = options.minimumIntegerDigits;
        }
        if (options && options.minimumFractionDigits !== void 0) {
            numberFormat.minimumFractionDigits = options.minimumFractionDigits;
        }
        if (options && options.maximumFractionDigits !== void 0) {
            numberFormat.maximumFractionDigits = options.maximumFractionDigits;
        }
        if (options && options.useGrouping !== void 0) {
            numberFormat.usesGroupingSeparator = options.useGrouping;
        }
        if (pattern) {
            numberFormat.positiveFormat = pattern;
        }
        else {
            if (options && (options.style.toLowerCase() === "currency" && options.currencyDisplay === "code")) {
                let tempPattern = numberFormat.positiveFormat;
                tempPattern = tempPattern.replace("¤", "¤¤");
                numberFormat.positiveFormat = tempPattern;
            }
        }
        return numberFormat.stringFromNumber(value);
    }
}
