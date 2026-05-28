import { Component } from "@angular/core";
import { AppName } from "../app-name/app-name";
import { Constants } from "../utils/constants";
import { AppRoutes, tRoute } from "../utils/routes";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-footer",
	imports: [RouterLink, RouterLinkActive, AppName],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.scss",
})
export class FooterComponent {
	protected appName = Constants.appName;

	protected footerRoutes: Array<tRoute> = [
		AppRoutes.home,
		AppRoutes.quizList,
		AppRoutes.leaderboard,
		AppRoutes.privacyPolicy,
		AppRoutes.cookiePolicy,
	];
}
