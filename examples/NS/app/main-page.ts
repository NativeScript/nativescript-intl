import { EventData } from "data/observable";
import { Page } from "ui/page";
import { DateTimeFormat } from "nativescript-intl";
import { fromObject, Observable } from "data/observable";

let model: Observable;
let mediumDateTimeOptions = {
    "year": "numeric",
    "month": "short",
    "day": "numeric",
    "hour": "numeric",
    "minute": "2-digit",
    "second": "numeric"
};
let longDateOptions = {
    "year": "numeric",
    "month": "long",
    "day": "numeric"
};
let fullDateOptions = {
    "year": "numeric",
    "month": "long",
    "day": "numeric",
    "weekday": "long"
};
let shortDateTimeOptions = {
    "year": "numeric",
    "month": "numeric",
    "day": "numeric",
    "hour": "numeric",
    "minute": "numeric"
};

let myDate: Date = new Date("Tue Nov 15 2016 21:02:49 GMT+0200 (EET)");

export function onNavigating(args: EventData) {
    let page = <Page>args.object;
    model = fromObject({
        "mediumDateTimeOptions": new DateTimeFormat("en-US", mediumDateTimeOptions).format(myDate),
        "longDateOptions": new DateTimeFormat("en-US", longDateOptions).format(myDate),
        "fullDateOptions": new DateTimeFormat("en-US", fullDateOptions).format(myDate),
        "shortDateTimeOptions": new DateTimeFormat("en-US", shortDateTimeOptions).format(myDate)
    });
    page.bindingContext = model;
}