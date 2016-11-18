// important since typescript compiler does not recognize DateTimeFormat and NumberFormat
import  { DateTimeFormat, NumberFormat } from "./nativescript-intl";

export { DateTimeFormat, NumberFormat } from "./nativescript-intl";

declare var global: any;

if (!global.Intl) {
    global.Intl = {};
}
global.Intl.DateTimeFormat = DateTimeFormat;
global.Intl.NumberFormat = NumberFormat;

