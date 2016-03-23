var intl = require("nativescript-intl");
var platform = require("platform");

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
    "no-NO"
];

var longDateResults = [
    "21. März 2016",
    "21 maart 2016",
    "21 mars 2016",
    "21 март 2016 г.",
    "21. ožujka 2016.",
    "21 Μαρτίου 2016",
    "21. března 2016",
    "21. marts 2016",
    "21. märts 2016",
    "21. maaliskuuta 2016",
    "21 mars 2016",
    "21. März 2016",
    "21 Μαρτίου 2016",
    "2016. március 21.",
    "21 marzo 2016",
    "2016. gada 21. marts",
    "21 martie 2016",
    "21 maart 2016",
    "21 marca 2016",
    "21 de março de 2016",
    "21 martie 2016",
    "21 марта 2016 г.",
    "21. март 2016.",
    "21. marca 2016",
    "21. marec 2016",
    "21 de marzo de 2016",
    "21 mars 2016",
    "21. März 2016",
    "21 Mart 2016",
    "21 березня 2016 р.",
    "21 March 2016",
    "March 21, 2016",
    "21. mars 2016"
];

var mediumDateTimeResultsAndroid = [
    "22. März 2016 09:40:39", //22. März 2016, 09:40:39
    "22 mrt. 2016 09:40:39",
    "22 mars 2016 09:40:39",
    "22 март 2016 г. 09:40:39", //22.03.2016 г., 9:40:39
    "22. ožu 2016. 09:40:39",
    "22 Μαρ 2016 09:40:39 π.μ.", //22 Μαρ 2016, 9:40:39 π.μ.
    "22. bře 2016 09:40:39", //22. 3. 2016 9:40:39
    "22. mar. 2016 09.40.39",
    "22. märts 2016 09:40.39", //22. märts 2016 9:40.39
    "22. maaliskuuta 2016 09.40.39", //22. maaliskuuta 2016 9.40.39
    "22 mars 2016 09:40:39",
    "22. März 2016 09:40:39", //22. März 2016, 09:40:39
    "22 Μαρ 2016 09:40:39 π.μ.", //22 Μαρ 2016, 9:40:39 π.μ.
    "2016. márc. 22. 09:40:39", //2016. márc. 22. 9:40:39
    "22 mar 2016 09:40:39", //22 mar 2016, 09:40:39
    "2016. gada 22. marts 09:40:39", //2016. g. 22. marts 09:40:39
    "22 mar. 2016 09:40:39", //22 mar. 2016, 09:40:39
    "22 mrt. 2016 09:40:39",
    "22 mar 2016 09:40:39", //22 mar 2016, 09:40:39
    "22 de mar de 2016 09:40:39", //22/03/2016, 09:40:39
    "22 mar. 2016 09:40:39", //22 mar. 2016, 09:40:39
    "22 марта 2016 г. 09:40:39", //22 марта 2016 г., 9:40:39
    "22. мар 2016. 09.40.39",
    "22. mar 2016 09:40:39", //22. 3. 2016, 9:40:39
    "22. mar. 2016 09:40:39", //22. mar. 2016 09.40.39
    "22 de mar. de 2016 09:40:39", //22 de mar. de 2016 9:40:39
    "22 mars 2016 09:40:39",
    "22. März 2016 09:40:39", //22. März 2016, 09:40:39
    "22 Mar 2016 09:40:39",
    "22 бер. 2016 р. 09:40:39", //22 бер. 2016 09:40:39
    "22 Mar 2016 09:40:39", //22 Mar 2016, 09:40:39
    "Mar 22, 2016 09:40:39 AM", //Mar 22, 2016, 9:40:39 AM
    "22. mar. 2016 09.40.39" //22. mar. 2016, 09.40.39
];

var mediumDateTimeResultsIOS = [
    "22. März 2016 um 09:40:39", //22. März 2016, 09:40:39
    "22 mrt. 2016 09:40:39",
    "22 mars 2016 09:40:39",
    "22 март 2016 г., 09:40:39", //22.03.2016 г., 9:40:39
    "22. ožu 2016. u 09:40:39", //22. ožu 2016. 09:40:39
    "22 Μαρ 2016 - 09:40:39 πμ", //22 Μαρ 2016, 9:40:39 π.μ.
    "22. bře 2016 09:40:39", //22. 3. 2016 9:40:39
    "22. mar. 2016 kl. 09.40.39", //22. mar. 2016 09.40.39
    "22. märts 2016 09:40.39", //22. märts 2016 9:40.39
    "22. maaliskuuta 2016 klo 09.40.39", //22. maaliskuuta 2016 9.40.39
    "22 mars 2016 09:40:39",
    "22. März 2016 um 09:40:39", //22. März 2016, 09:40:39
    "22 Μαρ 2016 - 09:40:39 πμ", //22 Μαρ 2016, 9:40:39 π.μ.
    "2016. márc. 22. 09:40:39", //2016. márc. 22. 9:40:39
    "22 mar 2016 09:40:39", //22 mar 2016, 09:40:39
    "2016. gada 22. marts 09:40:39", //2016. g. 22. marts 09:40:39
    "22 mar. 2016, 09:40:39",
    "22 mrt. 2016 09:40:39",
    "22 mar 2016 09:40:39", //22 mar 2016, 09:40:39
    "22 de mar de 2016, 09:40:39", //22/03/2016, 09:40:39
    "22 mar. 2016, 09:40:39",
    "22 марта 2016 г., 09:40:39",
    "22. мар 2016. 09.40.39",
    "22. mar 2016, 09:40:39", //22. 3. 2016, 9:40:39
    "22. mar. 2016 09:40:39",
    "22 de mar de 2016, 09:40:39", //22 de mar. de 2016 9:40:39
    "22 mars 2016 09:40:39",
    "22. März 2016 um 09:40:39", //22. März 2016, 09:40:39
    "22 Mar 2016 09:40:39",
    "22 бер. 2016 р. 09:40:39", //22 бер. 2016 09:40:39
    "22 Mar 2016 at 09:40:39", //22 Mar 2016, 09:40:39
    "Mar 22, 2016 at 09:40:39 AM", //Mar 22, 2016, 9:40:39 AM
    "22. mar. 2016 09.40.39" //22. mar. 2016, 09.40.39
];

var shortDateTimeResultsAndroid = [
    "22.3.2016 11:06", //22.3.2016, 11:06
    "22/3/2016 11:06", //22-3-2016 11:06
    "22/3/2016 11:06",
    "22.3.2016 г. 11:06", //22.03.2016 г., 11:06
    "22.3.2016. 11:06",
    "22/3/2016 11:06 π.μ.", //22/3/2016, 11:06 π.μ.
    "22.3.2016 11:06", //22. 3. 2016 11:06
    "22/3/2016 11.06",
    "22.3.2016 11:06",
    "22.3.2016 11.06",
    "22/3/2016 11:06",
    "22.3.2016 11:06", //22.3.2016, 11:06
    "22/3/2016 11:06 π.μ.", //22/3/2016, 11:06 π.μ.
    "2016. 3. 22. 11:06", //2016. 03. 22. 11:06
    "22/3/2016 11:06", //22/3/2016, 11:06
    "22.3.2016 11:06", //22.3.2016. 11:06
    "22.3.2016 11:06", //22.03.2016, 11:06
    "22-3-2016 11:06",
    "22.3.2016 11:06", //22.03.2016, 11:06
    "22/3/2016 11:06", //22/03/2016, 11:06
    "22.3.2016 11:06", //22.03.2016, 11:06
    "22.3.2016 11:06", //22.03.2016, 11:06
    "22.3.2016. 11.06", //22.3.2016. 11.06
    "22.3.2016 11:06", //22. 3. 2016, 11:06
    "22. 3. 2016 11:06", //22. 3. 2016 11.06
    "22/3/2016 11:06",
    "2016-3-22 11:06", //2016-03-22 11:06
    "22.3.2016 11:06", //22.3.2016, 11:06
    "22 3 2016 11:06", //22.03.2016 11:06
    "22.3.2016 11:06", //22.03.2016 11:06
    "22/3/2016 11:06", //22/03/2016, 11:06
    "3/22/2016 11:06 AM", //3/22/2016, 11:06 AM
    "22.3.2016 11.06" //22.3.2016, 11.06
];

var shortDateTimeResultsIOS = [
    "22.3.2016, 11:06",
    "22/3/2016 11:06", //22-3-2016 11:06
    "22/3/2016 11:06",
    "22.3.2016 г., 11:06",
    "22.3.2016. 11:06",
    "22/3/2016, 11:06 πμ", //22/3/2016, 11:06 π.μ.
    "22.3.2016 11:06", //22. 3. 2016 11:06
    "22/3/2016 11.06",
    "22.3.2016 11:06",
    "22.3.2016 11.06",
    "22/3/2016 11:06",
    "22.3.2016, 11:06",
    "22/3/2016, 11:06 πμ", //22/3/2016, 11:06 π.μ.
    "2016. 3. 22. 11:06", //2016. 03. 22. 11:06
    "22/3/2016, 11:06",
    "22.3.2016 11:06", //22.3.2016. 11:06
    "22.3.2016, 11:06",
    "22-3-2016 11:06",
    "22.3.2016, 11:06",
    "22/3/2016, 11:06",
    "22.3.2016, 11:06", //22.03.2016, 11:06
    "22.3.2016, 11:06", //22.03.2016, 11:06
    "22.3.2016. 11.06", //22.3.2016. 11.06
    "22.3.2016 11:06", //22. 3. 2016, 11:06
    "22. 3. 2016 11:06", //22. 3. 2016 11.06
    "22/3/2016 11:06",
    "2016-3-22 11:06", //2016-03-22 11:06
    "22.3.2016, 11:06", //22.3.2016, 11:06
    "22.3.2016 11:06", //22.03.2016 11:06
    "22.3.2016 11:06", //22.03.2016 11:06
    "22/3/2016, 11:06", //22/03/2016, 11:06
    "3/22/2016, 11:06 AM",
    "22.3.2016, 11.06"
];

var fullDateResults = [
    "Dienstag, 22. März 2016",
    "dinsdag 22 maart 2016",
    "mardi 22 mars 2016",
    "вторник, 22 март 2016 г.",
    "utorak, 22. ožujka 2016.",
    "Τρίτη, 22 Μαρτίου 2016",
    "úterý 22. března 2016",
    "tirsdag den 22. marts 2016",
    "teisipäev, 22. märts 2016",
    "tiistai 22. maaliskuuta 2016", //tiistaina 22. maaliskuuta 2016
    "mardi 22 mars 2016",
    "Dienstag, 22. März 2016",
    "Τρίτη, 22 Μαρτίου 2016",
    "2016. március 22., kedd",
    "martedì 22 marzo 2016",
    "otrdiena, 2016. gada 22. marts",
    "marți, 22 martie 2016",
    "dinsdag 22 maart 2016",
    "wtorek, 22 marca 2016",
    "terça-feira, 22 de março de 2016",
    "marți, 22 martie 2016",
    "вторник, 22 марта 2016 г.",
    "уторак, 22. март 2016.",
    "utorok, 22. marca 2016",
    "torek, 22. marec 2016",
    "martes, 22 de marzo de 2016",
    "tisdag 22 mars 2016",
    "Dienstag, 22. März 2016",
    "22 Mart 2016 Salı",
    "вівторок, 22 березня 2016 р.",
    "Tuesday, 22 March 2016",
    "Tuesday, March 22, 2016",
    "tirsdag 22. mars 2016"
];

var mediumDateResultsAndroid = [
    "22. März 2016",
    "22 mrt. 2016",
    "22 mars 2016",
    "22 март 2016 г.", //22.03.2016 г.
    "22. ožu 2016.",
    "22 Μαρ 2016",
    "22. bře 2016", //22. 3. 2016
    "22. mar. 2016",
    "22. märts 2016",
    "22. maaliskuuta 2016",
    "22 mars 2016",
    "22. März 2016",
    "22 Μαρ 2016",
    "2016. márc. 22.",
    "22 mar 2016",
    "2016. gada 22. marts", //2016. g. 22. marts
    "22 mar. 2016",
    "22 mrt. 2016",
    "22 mar 2016",
    "22 de mar de 2016", //22/03/2016
    "22 mar. 2016",
    "22 марта 2016 г.",
    "22. мар 2016.",
    "22. mar 2016", //22. 3. 2016
    "22. mar. 2016",
    "22 de mar. de 2016",
    "22 mars 2016",
    "22. März 2016",
    "22 Mar 2016",
    "22 бер. 2016 р.", //22 бер. 2016
    "22 Mar 2016",
    "Mar 22, 2016",
    "22. mar. 2016"
];

var mediumDateResultsIOS = [
    "22. März 2016",
    "22 mrt. 2016",
    "22 mars 2016",
    "22 март 2016 г.", //22.03.2016 г.
    "22. ožu 2016.",
    "22 Μαρ 2016",
    "22. bře 2016", //22. 3. 2016
    "22. mar. 2016",
    "22. märts 2016",
    "22. maaliskuuta 2016",
    "22 mars 2016",
    "22. März 2016",
    "22 Μαρ 2016",
    "2016. márc. 22.",
    "22 mar 2016",
    "2016. gada 22. marts", //2016. g. 22. marts
    "22 mar. 2016",
    "22 mrt. 2016",
    "22 mar 2016",
    "22 de mar de 2016", //22/03/2016
    "22 mar. 2016",
    "22 марта 2016 г.",
    "22. мар 2016.",
    "22. mar 2016", //22. 3. 2016
    "22. mar. 2016",
    "22 de mar de 2016", //22 de mar. de 2016
    "22 mars 2016",
    "22. März 2016",
    "22 Mar 2016",
    "22 бер. 2016 р.", //22 бер. 2016
    "22 Mar 2016",
    "Mar 22, 2016",
    "22. mar. 2016"
];

var shortDateResultsAndroid = [
    "22.10.2016",
    "22/10/2016", //22-10-2016
    "22/10/2016",
    "22.10.2016 г.",
    "22.10.2016.",
    "22/10/2016",
    "22.10.2016", //22. 10. 2016
    "22/10/2016",
    "22.10.2016",
    "22.10.2016",
    "22/10/2016",
    "22.10.2016",
    "22/10/2016",
    "2016. 10. 22.",
    "22/10/2016",
    "22.10.2016", //22.10.2016.
    "22.10.2016",
    "22-10-2016",
    "22.10.2016",
    "22/10/2016",
    "22.10.2016",
    "22.10.2016",
    "22.10.2016.",
    "22.10.2016", //22. 10. 2016
    "22. 10. 2016",
    "22/10/2016",
    "2016-10-22",
    "22.10.2016",
    "22 10 2016", //22.10.2016
    "22.10.2016",
    "22/10/2016",
    "10/22/2016",
    "22.10.2016"
];

var shortDateResultsIOS = [
    "22.10.2016",
    "22/10/2016", //22-10-2016
    "22/10/2016",
    "22.10.2016 г.",
    "22.10.2016.",
    "22/10/2016",
    "22.10.2016", //22. 10. 2016
    "22/10/2016",
    "22.10.2016",
    "22.10.2016",
    "22/10/2016",
    "22.10.2016",
    "22/10/2016",
    "2016. 10. 22.",
    "22/10/2016",
    "22.10.2016", //22.10.2016.
    "22.10.2016",
    "22-10-2016",
    "22.10.2016",
    "22/10/2016",
    "22.10.2016",
    "22.10.2016",
    "22.10.2016.",
    "22.10.2016", //22. 10. 2016
    "22. 10. 2016",
    "22/10/2016",
    "2016-10-22",
    "22.10.2016",
    "22.10.2016",
    "22.10.2016",
    "22/10/2016",
    "10/22/2016",
    "22.10.2016"
];

var mediumTimeResultsAndroid = [
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39 μ.μ.",
    "12:05:39",
    "12.05.39",
    "12:05.39",
    "12.05.39",
    "12:05:39",
    "12:05:39",
    "12:05:39 μ.μ.",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12.05.39",
    "12:05:39",
    "12:05:39", //12.05.39
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39 PM",
    "12.05.39"
];

var mediumTimeResultsIOS = [
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39 μμ", //12:05:39 μ.μ.
    "12:05:39",
    "12.05.39",
    "12:05.39",
    "12.05.39",
    "12:05:39",
    "12:05:39",
    "12:05:39 μμ", //12:05:39 μ.μ.
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12.05.39",
    "12:05:39",
    "12:05:39", //12.05.39
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39",
    "12:05:39 PM",
    "12.05.39"
];

var shortTimeResultsAndroid = [
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13 μ.μ.",
    "12:13",
    "12.13",
    "12:13",
    "12.13",
    "12:13",
    "12:13",
    "12:13 μ.μ.",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12.13",
    "12:13",
    "12:13", //12.13
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13 PM",
    "12.13"
];

var shortTimeResultsIOS = [
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13 μμ", //12:13 μ.μ.
    "12:13",
    "12.13",
    "12:13",
    "12.13",
    "12:13",
    "12:13",
    "12:13 μμ", //12:13 μ.μ.
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12.13",
    "12:13",
    "12:13", //12.13
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13",
    "12:13 PM",
    "12.13"
];

var customPatternResults = [
    "2016 Oktober 22, Samstag 12:13:39",
    "2016 oktober 22, zaterdag 12:13:39",
    "2016 octobre 22, samedi 12:13:39",
    "2016 октомври 22, събота 12:13:39",
    "2016 listopada 22, subota 12:13:39",
    "2016 Οκτωβρίου 22, Σάββατο 12:13:39",
    "2016 října 22, sobota 12:13:39",
    "2016 oktober 22, lørdag 12:13:39",
    "2016 oktoober 22, laupäev 12:13:39",
    "2016 lokakuuta 22, lauantaina 12:13:39",
    "2016 octobre 22, samedi 12:13:39",
    "2016 Oktober 22, Samstag 12:13:39",
    "2016 Οκτωβρίου 22, Σάββατο 12:13:39",
    "2016 október 22, szombat 12:13:39",
    "2016 ottobre 22, sabato 12:13:39",
    "2016 oktobris 22, sestdiena 12:13:39",
    "2016 octombrie 22, sâmbătă 12:13:39",
    "2016 oktober 22, zaterdag 12:13:39",
    "2016 października 22, sobota 12:13:39",
    "2016 outubro 22, sábado 12:13:39",
    "2016 octombrie 22, sâmbătă 12:13:39",
    "2016 октября 22, суббота 12:13:39",
    "2016 октобар 22, субота 12:13:39",
    "2016 októbra 22, sobota 12:13:39",
    "2016 oktober 22, sobota 12:13:39",
    "2016 octubre 22, sábado 12:13:39",
    "2016 oktober 22, lördag 12:13:39",
    "2016 Oktober 22, Samstag 12:13:39",
    "2016 Ekim 22, Cumartesi 12:13:39",
    "2016 жовтня 22, субота 12:13:39",
    "2016 October 22, Saturday 12:13:39",
    "2016 October 22, Saturday 12:13:39",
    "2016 oktober 22, lørdag 12:13:39"
]

describe('NativeScript-Intl-DateTimeFormat', function () {
    describe('DateTimeFormat-longDate', function () {
        it('should return long date format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var longDateOptions = {'year': 'numeric', 'month': 'long', 'day': 'numeric'};
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], longDateOptions).format(new Date(2016, 2, 21));
                //console.log(locales[i] + " index: " + i + " - web: |" + longDateResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (longDateResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-medium', function () {
        it('should return medium date time format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var mediumDateTimeOptions = {
                'year': 'numeric',
                'month': 'short',
                'day': 'numeric',
                'hour': 'numeric',
                'minute': '2-digit',
                'second': 'numeric'
            };
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var mediumDateTimeResults = (platform.device.os === platform.platformNames.ios) ? mediumDateTimeResultsIOS : mediumDateTimeResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], mediumDateTimeOptions).format(new Date(2016, 2, 22, 9, 40, 39));
                //console.log(locales[i] + " index: " + i + " - web: |" + mediumDateTimeResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (mediumDateTimeResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-short', function () {
        it('should return short date time format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var shortDateTimeOptions = {
                'year': 'numeric',
                'month': 'numeric',
                'day': 'numeric',
                'hour': 'numeric',
                'minute': 'numeric'
            };
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var shortDateTimeResults = (platform.device.os === platform.platformNames.ios) ? shortDateTimeResultsIOS : shortDateTimeResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], shortDateTimeOptions).format(new Date(2016, 2, 22, 11, 6));
                //console.log(locales[i] + " index: " + i + " - web: |" + shortDateTimeResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (shortDateTimeResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-fullDate', function () {
        it('should return full date format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var fullDateOptions = {
                'year': 'numeric',
                'month': 'long',
                'day': 'numeric',
                'weekday': 'long'
            };
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], fullDateOptions).format(new Date(2016, 2, 22, 11, 6));
                //console.log(locales[i] + " index: " + i + " - web: |" + fullDateResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (fullDateResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-mediumDate', function () {
        it('should return medium date format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var mediumDateOptions = {
                'year': 'numeric',
                'month': 'short',
                'day': 'numeric'
            };
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var mediumDateResults = (platform.device.os === platform.platformNames.ios) ? mediumDateResultsIOS : mediumDateResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], mediumDateOptions).format(new Date(2016, 2, 22, 11, 6));
                //console.log(locales[i] + " index: " + i + " - web: |" + mediumDateResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (mediumDateResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-shortDate', function () {
        it('should return short date format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var shortDateOptions = {
                'year': 'numeric',
                'month': 'numeric',
                'day': 'numeric'
            };
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var shortDateResults = (platform.device.os === platform.platformNames.ios) ? shortDateResultsIOS : shortDateResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], shortDateOptions).format(new Date(2016, 9, 22, 11, 6));
                //console.log(locales[i] + " index: " + i + " - web: |" + shortDateResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (shortDateResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-mediumTime', function () {
        it('should return medium time format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var mediumTimeOptions = {
                'hour': 'numeric',
                'minute': 'numeric',
                'second': 'numeric'
            };
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var mediumTimeResults = (platform.device.os === platform.platformNames.ios) ? mediumTimeResultsIOS : mediumTimeResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], mediumTimeOptions).format(new Date(2016, 9, 22, 12, 5, 39));
                //console.log(locales[i] + " index: " + i + " - web: |" + mediumTimeResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (mediumTimeResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-shortTime', function () {
        it('should return short time format same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var shortTimeOptions = {
                'hour': 'numeric',
                'minute': 'numeric'
            };
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var shortTimeResults = (platform.device.os === platform.platformNames.ios) ? shortTimeResultsIOS : shortTimeResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], shortTimeOptions).format(new Date(2016, 9, 22, 12, 13, 39));
                //console.log(locales[i] + " index: " + i + " - web: |" + shortTimeResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (shortTimeResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-customPattern', function () {
        it('when custom pattern is used it should be taken into account', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var testPattern = 'y MMMM d, EEEE HH:mm:ss';
            var nativeFormatResult = '';
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.DateTimeFormat(locales[i], null, testPattern).format(new Date(2016, 9, 22, 12, 13, 39));
                //console.log(locales[i] + " index: " + i + " - web: |" + customPatternResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (customPatternResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('DateTimeFormat-noLocale', function () {
        it('when no locale is provided should be used device locale', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var testOptions = {
                'year': 'numeric',
                'month': 'short',
                'day': 'numeric'
            };
            // mediumDate for 'en-US' locale
            var expected = 'Oct 22, 2016';
            var nativeFormatResult = new intl.DateTimeFormat(null, testOptions).format(new Date(2016, 9, 22, 12, 13, 39));;
            assert.equal(expected, nativeFormatResult);
        });
    });
});

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

var currencyCodesResultsAndroid = [
    "EUR 123456,79",
    "123456,79 EUR", // EUR 123456,79
    "123456,79 EUR",
    "123456,79 BGN",
    "123456,79 HRK",
    "123456,79 EUR",
    "123456,79 CZK",
    "123456,79 DKK",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 HUF",
    "123456,79 EUR",
    "EUR123456,79",
    "123456,79 MDL",
    "EUR 123456,79",
    "123456,79 PLN",
    "123456,79 EUR",
    "123456,79 RON",
    "123456,79 RUB",
    "123457 RSD",
    "123456,79 EUR",
    "123457 SLL", //123456,79 EUR
    "123456,79 EUR",
    "123456,79 SEK",
    "CHF 123456.79",
    "TRY123456,79", //123456,79 TRY
    "123456,79 UAH",
    "GBP123456.79",
    "USD123456.79",
    "NOK 123456,79"
];

var currencyCodesResultsIOS = [
    "EUR 123456,79",
    "123456,79 EUR", // EUR 123456,79
    "123456,79 EUR",
    "123456,79 BGN",
    "123456,79 HRK",
    "123456,79 EUR",
    "123456,79 CZK",
    "123456,79 DKK",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 EUR",
    "123456,79 HUF",
    "123456,79 EUR",
    "EUR123456,79",
    "123456,79 MDL",
    "EUR 123456,79",
    "123456,79 PLN",
    "123456,79 EUR",
    "123456,79 RON",
    "123456,79 RUB",
    "123457 RSD",
    "123456,79 EUR",
    "123457 SLL",
    "123456,79 EUR",
    "123456,79 SEK",
    "CHF 123456.79",
    "TRY123456,79", //123456,79 TRY
    "123456,79 UAH",
    "GBP123456.79",
    "USD123456.79",
    "NOK 123456,79"
];

var currencyCodesGroupingResultsAndroid = [
    "EUR 123.456,79",
    "123.456,79 EUR", //EUR 123.456,79"
    "123.456,79 EUR", //123 456,79 EUR
    "123 456,79 BGN",
    "123.456,79 HRK",
    "123.456,79 EUR",
    "123 456,79 CZK",
    "123.456,79 DKK",
    "123 456,79 EUR",
    "123 456,79 EUR",
    "123 456,79 EUR",
    "123.456,79 EUR",
    "123.456,79 EUR",
    "123 456,79 HUF",
    "123.456,79 EUR",
    "EUR123456,79", //EUR123 456,79
    "123.456,79 MDL",
    "EUR 123.456,79",
    "123 456,79 PLN",
    "123 456,79 EUR",
    "123.456,79 RON",
    "123 456,79 RUB",
    "123.457 RSD",
    "123 456,79 EUR",
    "123.457 SLL", //123.456,79 EUR
    "123.456,79 EUR",
    "123 456,79 SEK",
    "CHF 123'456.79",
    "TRY123.456,79", //123.456,79 TRY
    "123 456,79 UAH",
    "GBP123,456.79",
    "USD123,456.79",
    "NOK 123 456,79"
];

var currencyCodesGroupingResultsIOS = [
    "EUR 123.456,79",
    "123.456,79 EUR", //EUR 123.456,79"
    "123.456,79 EUR", //123 456,79 EUR
    "123 456,79 BGN",
    "123.456,79 HRK",
    "123.456,79 EUR",
    "123 456,79 CZK",
    "123.456,79 DKK",
    "123 456,79 EUR",
    "123 456,79 EUR",
    "123 456,79 EUR",
    "123.456,79 EUR",
    "123.456,79 EUR",
    "123 456,79 HUF",
    "123.456,79 EUR",
    "EUR123456,79", //EUR123 456,79
    "123.456,79 MDL",
    "EUR 123.456,79",
    "123 456,79 PLN",
    "123 456,79 EUR",
    "123.456,79 RON",
    "123 456,79 RUB",
    "123.457 RSD",
    "123 456,79 EUR",
    "123.457 SLL",
    "123.456,79 EUR",
    "123 456,79 SEK",
    "CHF 123'456.79",
    "TRY123.456,79", //123.456,79 TRY
    "123 456,79 UAH",
    "GBP123,456.79",
    "USD123,456.79",
    "NOK 123 456,79"
];

var currencyCodesSymbolResultsAndroid = [
    "€ 123456,79",
    "123456,79 €", //€ 123456,79
    "123456,79 €",
    "123456,79 лв.",
    "123456,79 HRK",
    "123456,79 €",
    "123456,79 Kč",
    "123456,79 kr.",
    "123456,79 €", //123456,79 EEK
    "123456,79 €", //123456,79 FIM
    "123456,79 €",
    "123456,79 €",
    "123456,79 €",
    "123456,79 HUF",
    "123456,79 €",
    "€123456,79",
    "123456,79 L", //123456,79 MDL
    "€ 123456,79",
    "123456,79 zł",
    "123456,79 €",
    "123456,79 RON",
    "123456,79 руб.",
    "123457 RSD",
    "123456,79 €",
    "123457 SLL", //123456,79 €
    "123456,79 €",
    "123456,79 kr",
    "CHF 123456.79",
    "₺123456,79", //123456,79 TL
    "123456,79 ₴",
    "£123456.79",
    "$123456.79",
    "kr 123456,79"
];

var currencyCodesSymbolResultsIOS = [
    "€ 123456,79",
    "123456,79 €", //€ 123456,79
    "123456,79 €",
    "123456,79 лв.",
    "123456,79 HRK",
    "123456,79 €",
    "123456,79 Kč",
    "123456,79 kr.",
    "123456,79 €",
    "123456,79 €",
    "123456,79 €",
    "123456,79 €",
    "123456,79 €",
    "123456,79 HUF",
    "123456,79 €",
    "€123456,79",
    "123456,79 L", //123456,79 MDL
    "€ 123456,79",
    "123456,79 zł",
    "123456,79 €",
    "123456,79 RON",
    "123456,79 ₽", //123456,79 руб.
    "123457 RSD",
    "123456,79 €",
    "123457 SLL",
    "123456,79 €",
    "123456,79 kr",
    "CHF 123456.79",
    "₺123456,79", //123456,79 TL
    "123456,79 ₴",
    "£123456.79",
    "$123456.79",
    "kr 123456,79"
];

var percentResults = [
    "12.345.679 %",
    "12.345.679%",
    "12.345.679 %", //12 345 679 %
    "12 345 679%",
    "12.345.679%",
    "12.345.679%",
    "12 345 679 %",
    "12.345.679 %",
    "12 345 679%",
    "12 345 679 %",
    "12 345 679 %",
    "12.345.679 %",
    "12.345.679%",
    "12 345 679%",
    "12.345.679%",
    "12 345 679%",
    "12.345.679 %",
    "12.345.679%",
    "12 345 679%",
    "12 345 679%",
    "12.345.679 %",
    "12 345 679 %",
    "12.345.679%",
    "12 345 679 %",
    "12.345.679%",
    "12.345.679 %",
    "12 345 679 %",
    "12'345'679 %",
    "%12.345.679",
    "12 345 679%",
    "12,345,679%",
    "12,345,679%",
    "12 345 679 %"
];

var decimalResults = [
    "123.456,79",
    "123.456,79",
    "123.456,79", //123 456,79
    "123 456,79",
    "123.456,79",
    "123.456,79",
    "123 456,79",
    "123.456,79",
    "123 456,79",
    "123 456,79",
    "123 456,79",
    "123.456,79",
    "123.456,79",
    "123 456,79",
    "123.456,79",
    "123 456,79",
    "123.456,79",
    "123.456,79",
    "123 456,79",
    "123 456,79",
    "123.456,79",
    "123 456,79",
    "123.456,79",
    "123 456,79",
    "123.456,79",
    "123.456,79",
    "123 456,79",
    "123'456.79",
    "123.456,79",
    "123 456,79",
    "123,456.79",
    "123,456.79",
    "123 456,79"
];

var customNumberPatternResultsAndroid = [
    "123.456,79 €",
    "123.456,79 €",
    "123.456,79 €",
    "123 456,79 лв.",
    "123.456,79 HRK",
    "123.456,79 €",
    "123 456,79 Kč",
    "123.456,79 kr.",
    "123 456,79 €",
    "123 456,79 €",
    "123 456,79 €",
    "123.456,79 €",
    "123.456,79 €",
    "123 456,79 HUF",
    "123.456,79 €",
    "123 456,79 €",
    "123.456,79 L",
    "123.456,79 €",
    "123 456,79 zł",
    "123 456,79 €",
    "123.456,79 RON",
    "123 456,79 руб.",
    "123.456,79 RSD",
    "123 456,79 €",
    "123.456,79 SLL",
    "123.456,79 €",
    "123 456,79 kr",
    "123'456.79 CHF",
    "123.456,79 ₺",
    "123 456,79 ₴",
    "123,456.79 £",
    "123,456.79 $",
    "123 456,79 kr"
];

var customNumberPatternResultsIOS = [
    "123.456,79 €",
    "123.456,79 €",
    "123.456,79 €",
    "123 456,79 лв.",
    "123.456,79 HRK",
    "123.456,79 €",
    "123 456,79 Kč",
    "123.456,79 kr.",
    "123 456,79 €",
    "123 456,79 €",
    "123 456,79 €",
    "123.456,79 €",
    "123.456,79 €",
    "123 456,79 HUF",
    "123.456,79 €",
    "123 456,79 €",
    "123.456,79 L",
    "123.456,79 €",
    "123 456,79 zł",
    "123 456,79 €",
    "123.456,79 RON",
    "123 456,79 ₽",
    "123.456,79 RSD",
    "123 456,79 €",
    "123.456,79 SLL",
    "123.456,79 €",
    "123 456,79 kr",
    "123'456.79 CHF",
    "123.456,79 ₺",
    "123 456,79 ₴",
    "123,456.79 £",
    "123,456.79 $",
    "123 456,79 kr"
];

describe('NativeScript-Intl-NumberFormat', function() {
    describe('NumberFormat-currency', function () {
        it('should return number formatted as currency without grouping same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var testNumber = 123456.789;
            var currencyCodesResults = (platform.device.os === platform.platformNames.ios) ? currencyCodesResultsIOS : currencyCodesResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.NumberFormat(locales[i], {
                    'style': 'currency',
                    'useGrouping': false,
                    'currency': currencyCodes[i],
                    'currencyDisplay': 'code'
                }).format(testNumber);
                //console.log(locales[i] + " index: " + i + " - web: |" + currencyCodesResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (currencyCodesResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
        it('should return number formatted as currency with grouping same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var testNumber = 123456.789;
            var currencyCodesGroupingResults = (platform.device.os === platform.platformNames.ios) ? currencyCodesGroupingResultsIOS : currencyCodesGroupingResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.NumberFormat(locales[i], {
                    'style': 'currency',
                    'currency': currencyCodes[i],
                    'currencyDisplay': 'code'
                }).format(testNumber);
                //console.log(locales[i] + " index: " + i + " - web: |" + currencyCodesGroupingResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (currencyCodesGroupingResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
        it('should return number formatted as currency as symbol same as chrome browser result', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var testNumber = 123456.789;
            var currencyCodesSymbolResults = (platform.device.os === platform.platformNames.ios) ? currencyCodesSymbolResultsIOS : currencyCodesSymbolResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.NumberFormat(locales[i], {
                    'style': 'currency',
                    'useGrouping': false,
                    'currency': currencyCodes[i],
                    'currencyDisplay': 'symbol'
                }).format(testNumber);
                //console.log(locales[i] + " index: " + i + " - web: |" + currencyCodesSymbolResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (currencyCodesSymbolResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('NumberFormat-percent', function () {
        it('should return number formatted as percent same as in chrome browser', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var testNumber = 123456.789;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.NumberFormat(locales[i], {
                    'style': 'percent'
                }).format(testNumber);
                //console.log(locales[i] + " index: " + i + " - web: |" + percentResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (percentResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('NumberFormat-decimal', function () {
        it('should return number formatted as percent same as in chrome browser', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var testNumber = 123456.789;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.NumberFormat(locales[i], {
                    'style': 'decimal',
                    'minimumIntegerDigits': 2,
                    'minimumFractionDigits': 1,
                    'maximumFractionDigits': 2
                }).format(testNumber);
                //console.log(locales[i] + " index: " + i + " - web: |" + decimalResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (decimalResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('NumberFormat-customPattern', function () {
        it('should use custom pattern if available', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var nativeFormatResult = '';
            var testPattern = '#,##0.00 ¤';
            var testNumber = 123456.789;
            var customNumberPatternResults = (platform.device.os === platform.platformNames.ios) ? customNumberPatternResultsIOS : customNumberPatternResultsAndroid;
            for(i = 0; i < localesLength; i++) {
                nativeFormatResult = new intl.NumberFormat(locales[i], null, testPattern).format(testNumber);
                //console.log(locales[i] + " index: " + i + " - web: |" + customNumberPatternResults[i] + "| - " + ", native: |" + nativeFormatResult + "|");
                if (customNumberPatternResults[i] === nativeFormatResult) {
                    good.push(i);
                } else {
                    bad.push(i);
                }
            }
            //console.log("good: " + good);
            //console.log("bad: " + bad);
            assert.equal(0, bad.length);
        });
    });
    describe('NumberFormat-noLocale', function () {
        it('when no locale is provided should be used device locale', function () {
            var i;
            var localesLength = locales.length;
            var good = [];
            var bad = [];
            var testOptions = {
                'style': 'currency',
                'currency': 'USD',
                'currencyDisplay': 'code'
            };
            // currency format with code 'en-US' locale
            var expected = 'USD123,456.79';
            var nativeFormatResult = new intl.NumberFormat(null, testOptions).format(123456.789);;
            assert.equal(expected, nativeFormatResult);
        });
    });
})