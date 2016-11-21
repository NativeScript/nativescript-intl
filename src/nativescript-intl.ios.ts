import common = require("./nativescript-intl-common");

export class DateTimeFormat extends common.DateTimeFormat {
    public getNativePattern(patternDefinition: {date?: string, time?: string}, locale?: string): string {
        let dateFormatter = NSDateFormatter.new();
        if (locale) {
            dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        if (patternDefinition.date) {
            dateFormatter.dateStyle = patternDefinition.date === common.FULL ? NSDateFormatterStyle.NSDateFormatterFullStyle : NSDateFormatterStyle.NSDateFormatterShortStyle;
        }
        if (patternDefinition.time) {
            dateFormatter.timeStyle = NSDateFormatterStyle.NSDateFormatterLongStyle;
        }
        return dateFormatter.dateFormat;
    }
    
    public formatNative(pattern: string, locale?: string, date?: Date): string {
        let dateFormatter = NSDateFormatter.new();
        if (locale) {
            dateFormatter.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        dateFormatter.dateFormat = pattern;
        return dateFormatter.stringFromDate(date ? NSDate.dateWithTimeIntervalSince1970(date.valueOf()/1000) : NSDate.new());
    }
}

// style?: string;
// currency?: string;
// currencyDisplay?: string;
// useGrouping?: boolean;
// minimumIntegerDigits?: number;
// minimumFractionDigits?: number;
// maximumFractionDigits?: number;
export class NumberFormat extends common.NumberFormat {
    public formatNative(value: number, locale?: string, options?: Intl.NumberFormatOptions, pattern?: string) {
        let numberFormat = NSNumberFormatter.new();
        if (locale) {
            numberFormat.locale = NSLocale.alloc().initWithLocaleIdentifier(locale);
        }
        if (options) {
            switch (options.style.toLowerCase()) {
                case 'decimal':
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterDecimalStyle;
                    break;
                case 'percent':
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterPercentStyle;
                    break;
                case 'currency':
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterCurrencyStyle;
                    if (options.currency !== void 0) {
                        numberFormat.currencyCode = options.currency;
                    }
                    break;
                default:
                    numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterDecimalStyle;
                    break;
            }
        } else {
            numberFormat.numberStyle = NSNumberFormatterStyle.NSNumberFormatterDecimalStyle;
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
        } else {
            if (options && (options.style.toLowerCase() === 'currency' && options.currencyDisplay === 'code')) {
                let pattern = numberFormat.positiveFormat;
                // this will display currency code instead of currency symbol
                pattern = pattern.replace('¤', '¤¤');
                numberFormat.positiveFormat = pattern;
            }
        }
        
        return numberFormat.stringFromNumber(NSNumber.alloc().initWithDouble(value));
    }
}
