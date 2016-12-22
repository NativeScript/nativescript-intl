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

export function onNavigating(args: EventData) {
    let page = <Page>args.object;
    model = fromObject({
        "mediumDateTimeOptions": "",
        "longDateOptions": "",
        "fullDateOptions": "",
        "shortDateTimeOptions": ""
    });
    page.bindingContext = model;
}

export function onTap() {
    model.set("mediumDateTimeOptions", new DateTimeFormat("en-US", mediumDateTimeOptions).format(new Date()));
    model.set("longDateOptions", new DateTimeFormat("en-US", longDateOptions).format(new Date()));
    model.set("fullDateOptions", new DateTimeFormat("en-US", fullDateOptions).format(new Date()));
    model.set("shortDateTimeOptions", new DateTimeFormat("en-US", shortDateTimeOptions).format(new Date()));
}