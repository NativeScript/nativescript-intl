"use strict";
var nativescript_intl_1 = require("nativescript-intl");
var observable_1 = require("data/observable");
var model;
function onNavigating(args) {
    var page = args.object;
    model = observable_1.fromObject({ "mediumDateTimeOptions": "", "longDateOptions": "", "fullDateOptions": "", "shortDateTimeOptions": "" });
    page.bindingContext = model;
}
exports.onNavigating = onNavigating;
function onTap() {
    var mediumDateTimeOptions = {
        "year": "numeric",
        "month": "short",
        "day": "numeric",
        "hour": "numeric",
        "minute": "2-digit",
        "second": "numeric"
    };
    model.set("mediumDateTimeOptions", new nativescript_intl_1.DateTimeFormat("en-US", mediumDateTimeOptions).format(new Date()));
    var longDateOptions = { "year": "numeric", "month": "long", "day": "numeric" };
    model.set("longDateOptions", new nativescript_intl_1.DateTimeFormat("en-US", longDateOptions).format(new Date()));
    var fullDateOptions = {
        "year": "numeric",
        "month": "long",
        "day": "numeric",
        "weekday": "long"
    };
    model.set("fullDateOptions", new nativescript_intl_1.DateTimeFormat("en-US", fullDateOptions).format(new Date()));
    var shortDateTimeOptions = {
        "year": "numeric",
        "month": "numeric",
        "day": "numeric",
        "hour": "numeric",
        "minute": "numeric"
    };
    model.set("shortDateTimeOptions", new nativescript_intl_1.DateTimeFormat("en-US", fullDateOptions).format(new Date()));
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map