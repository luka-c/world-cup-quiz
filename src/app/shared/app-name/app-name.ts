import { Component } from "@angular/core";
import { Constants } from "../utils/constants";

@Component({
	selector: "app-name",
	imports: [],
	templateUrl: "./app-name.html",
	styleUrl: "./app-name.scss",
})
export class AppName {
	protected appName = Constants.appName;
}
