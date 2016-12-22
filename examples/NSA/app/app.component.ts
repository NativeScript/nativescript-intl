import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public myDate: Date = new Date("Tue Nov 15 2016 21:02:49 GMT+0200 (EET)");
}
