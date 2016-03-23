declare module java {
	export module text {
		/**
		 * An abstract class for date/time formatting subclasses which formats and parses dates or time in a language-independent manner. The date/time formatting subclass, such as SimpleDateFormat, allows for formatting (i.e., date -> text), parsing (text -> date), and normalization. The date is represented as a Date object or as the milliseconds since January 1, 1970, 00:00:00 GMT.
		 */
		export class DateFormat {
			/**
			 * Returns a DateFormat instance for formatting and parsing dates in the DEFAULT style for the default locale.
			 */
			public static getDateInstance(): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing dates in the specified style for the user's default locale. See "<a href="../util/Locale.html#default_locale">Be wary of the default locale</a>".
			 * @param style 
			 */
			public static getDateInstance(style: number): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing dates in the specified style for the specified locale.
			 * @param style 
			 * @param locale 
			 */
			public static getDateInstance(style: number, locale: string): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing dates and time values in the DEFAULT style for the default locale.
			 */
			public static getDateTimeInstance(): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing of both dates and time values in the manner appropriate for the user's default locale. See "<a href="../util/Locale.html#default_locale">Be wary of the default locale</a>".
			 * @param dateStyle 
			 * @param timeStyle 
			 */
			public static getDateTimeInstance(dateStyle: number, timeStyle: number): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing dates and time values in the specified styles for the specified locale.
			 * @param dateStyle 
			 * @param timeStyle 
			 * @param locale 
			 */
			public static getDateTimeInstance(dateStyle: number, timeStyle: number, locale: string): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing time values in the DEFAULT style for the default locale.
			 */
			public static getTimeInstance(): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing time values in the specified style for the user's default locale. See "<a href="../util/Locale.html#default_locale">Be wary of the default locale</a>".
			 * @param style 
			 */
			public static getTimeInstance(style: number): java.text.DateFormat;
			/**
			 * Returns a DateFormat instance for formatting and parsing time values in the specified style for the specified locale.
			 * @param style 
			 * @param locale 
			 */
			public static getTimeInstance(style: number, locale: string): java.text.DateFormat;
		}
		/**
		 * A concrete class for formatting and parsing dates in a locale-sensitive manner. Formatting turns a Date into a String, and parsing turns a String into a Date.
		 */
		export class SimpleDateFormat extends java.text.DateFormat {
			/**
			 * Constructs a new SimpleDateFormat for formatting and parsing dates and times in the SHORT style for the user's default locale. See "<a href="../util/Locale.html#default_locale">Be wary of the default locale</a>".
			 */
			constructor();
			/**
			 * Constructs a new SimpleDateFormat using the specified non-localized pattern and the DateFormatSymbols and Calendar for the user's default locale. See "<a href="../util/Locale.html#default_locale">Be wary of the default locale</a>".
			 * @param pattern 
			 */
			constructor(pattern: string);
			/**
			 * Constructs a new SimpleDateFormat using the specified non-localized pattern and the DateFormatSymbols and Calendar for the specified locale.
			 * @param template 
			 * @param locale 
			 */
			constructor(template: string, locale: java.util.Locale);
			/**
			 * Formats the specified date using the rules of this date format.
			 * @param date 
			 */
			format(date: java.util.Date): string;
		}

        export class NumberFormat {
            constructor();
            public static getCurrencyInstance(locale: java.util.Locale);
            public static getNumberInstance(locale: java.util.Locale);
            public static getPercentInstance(locale: java.util.Locale);
        }
        export class DecimalFormat {
            constructor(pattern: string);
        }
        export class DecimalFormatSymbols {
            constructor();
            constructor(locale: java.util.Locale);
            public static getInstance(): DecimalFormatSymbols;
            public setCurrency(currency: java.util.Currency);
        }
    }
	export module util {
		export class Locale {
			constructor(language: string);
			constructor(language: string, country: string);
		}
		export class Date {
			constructor();
			constructor(secondsFrom1970: number);
		}
        export class Currency {
            public static getInstance(currencyCode: string);
        }
	}
}
