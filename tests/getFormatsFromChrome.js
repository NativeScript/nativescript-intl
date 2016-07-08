var locales = [
    "de-AT",
    "nl-BE",
    "fr-BE",
    "bg-BG",
    "hr-HR",
    "el-CY",
    "cs-CZ",
    "da-DK",
    "et-EE",
    "fi-FI",
    "fr-FR",
    "de-DE",
    "el-GR",
    "hu-HU",
    "it-IT",
    "lv-LV",
    "ro-MD",
    "nl-NL",
    "pl-PL",
    "pt-PT",
    "ro-RO",
    "ru-RU",
    "sr-RS",
    "sk-SK",
    "sl-SL",
    "es-ES",
    "sv-SE",
    "de-CH",
    "tr-TR",
    "uk-UA",
    "en-GB",
    "en-US",
    "nb-NO"
];

var dateTimeOptions = [
    {
        "optionsName": "longDateOptions",
        "options": {
            'year': 'numeric',
            'month': 'long',
            'day': 'numeric'
        }
    },
    {
        "optionsName": "mediumDateTimeOptions",
        "options": {
            'year': 'numeric',
            'month': 'short',
            'day': 'numeric',
            'hour': 'numeric',
            'minute': '2-digit',
            'second': 'numeric'
        }
    },
    {
        "optionsName": "shortDateTimeOptions",
        "options": {
            'year': 'numeric',
            'month': 'numeric',
            'day': 'numeric',
            'hour': 'numeric',
            'minute': 'numeric'
        }
    },
    {
        "optionsName": "fullDateOptions",
        "options": {
            'year': 'numeric',
            'month': 'long',
            'day': 'numeric',
            'weekday': 'long'
        }
    },
    {
        "optionsName": "mediumDateOptions",
        "options": {
            'year': 'numeric',
            'month': 'short',
            'day': 'numeric'
        }
    },
    {
        "optionsName": "shortDateOptions",
        "options": {
            'year': 'numeric',
            'month': 'numeric',
            'day': 'numeric'
        }
    },
    {
        "optionsName": "mediumTimeOptions",
        "options": {
            'hour': 'numeric',
            'minute': 'numeric',
            'second': 'numeric'
        }
    },
    {
        "optionsName": "shortTimeOptions",
        "options": {
            'hour': 'numeric',
            'minute': 'numeric'
        }
    }
];

var currencyCodes = [
    'EUR',
    'EUR',
    'EUR',
    'BGN',
    'HRK',
    'EUR',
    'CZK',
    'DKK',
    'EUR',
    'EUR',
    'EUR',
    "EUR",
    "EUR",
    "HUF",
    "EUR",
    "EUR",
    "MDL",
    "EUR",
    "PLN",
    "EUR",
    "RON",
    "RUB",
    "RSD",
    "EUR",
    "SLL",
    "EUR",
    "SEK",
    "CHF",
    "TRY",
    "UAH",
    "GBP",
    "USD",
    "NOK"
];

var currencyOptions = [
    {
        "optionsName": "currencyCodes",
        "options": {
            'style': 'currency',
            'useGrouping': false,
            'currencyDisplay': 'code'
        }
    },
    {
        "optionsName": "currencyCodesGrouping",
        "options": {
            'style': 'currency',
            'currencyDisplay': 'code'
        }
    },
    {
        "optionsName": "currencyCodesSymbol",
        "options": {
            'style': 'currency',
            'useGrouping': false,
            'currencyDisplay': 'symbol'
        }
    }
];

var numberOptions = [
    {
        "optionsName": "percent",
        "options": {
            'style': 'percent'
        }
    },
    {
        "optionsName": "decimal",
        "options": {
            'style': 'decimal',
            'minimumIntegerDigits': 2,
            'minimumFractionDigits': 1,
            'maximumFractionDigits': 2
        }
    },
    {
        "optionsName": "noLocale",
        "options": {
            'style': 'currency',
            'currency': 'USD',
            'currencyDisplay': 'code'
        }
    }
];

var getDateTimeFormatForLocales = function () {
    var i;
    var j;
    for (j = 0; j < dateTimeOptions.length; j++) {
        console.log(dateTimeOptions[j].optionsName);
        for (i = 0; i < locales.length; i++) {
            console.log(locales[i] + '"' + new Intl.DateTimeFormat(locales[i], dateTimeOptions[j].options).format(new Date(2016, 2, 22, 9, 40, 39)) + '",');
        }
        console.log("");
    }
}

var getNumberFormatForLocales = function () {
    var i;
    var j;
    var testNumber = 123456.789;
    for (j = 0; j < currencyOptions.length; j++) {
        console.log(currencyOptions[j].optionsName);
        for (i = 0; i < locales.length; i++) {
            var updatedCurrencyOptions = currencyOptions[j].options;
            updatedCurrencyOptions.currency = currencyCodes[i];
            console.log(locales[i] + '"' + new Intl.NumberFormat(locales[i], updatedCurrencyOptions).format(testNumber) + '",');
        }
        console.log("");
    }
    for (j = 0; j < numberOptions.length; j++) {
        console.log(numberOptions[j].optionsName);
        for (i = 0; i < locales.length; i++) {
            console.log(locales[i] + '"' + new Intl.NumberFormat(locales[i], numberOptions[j].options).format(testNumber) + '",');
        }
        console.log("");
    }
}

getDateTimeFormatForLocales();
getNumberFormatForLocales();