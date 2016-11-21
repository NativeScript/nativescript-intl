import { EventData } from "data/observable";
import { Page } from "ui/page";
import { DateTimeFormat } from "nativescript-intl";
import { fromObject, Observable } from "data/observable";

var model: Observable;

export function onNavigating(args: EventData) {
    let page = <Page>args.object;
    model = fromObject({"mediumDateTimeOptions": "", "longDateOptions": "", "fullDateOptions": "", "shortDateTimeOptions": ""});
    page.bindingContext = model;
}

export function onTap() {
    var mediumDateTimeOptions = {
        "year": "numeric",
        "month": "short",
        "day": "numeric",
        "hour": "numeric",
        "minute": "2-digit",
        "second": "numeric"
    };
    model.set("mediumDateTimeOptions", new DateTimeFormat("en-US", mediumDateTimeOptions).format(new Date()));
    var longDateOptions = {"year": "numeric", "month": "long", "day": "numeric"};
    model.set("longDateOptions", new DateTimeFormat("en-US", longDateOptions).format(new Date()));
    var fullDateOptions = {
        "year": "numeric",
        "month": "long",
        "day": "numeric",
        "weekday": "long"
    };
    model.set("fullDateOptions", new DateTimeFormat("en-US", fullDateOptions).format(new Date()));
    var shortDateTimeOptions = {
        "year": "numeric",
        "month": "numeric",
        "day": "numeric",
        "hour": "numeric",
        "minute": "numeric"
    };
    model.set("shortDateTimeOptions", new DateTimeFormat("en-US", fullDateOptions).format(new Date()));
}