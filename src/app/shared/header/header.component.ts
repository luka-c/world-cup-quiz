import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AppRoutes, tRoute } from "../utils/routes";
import { AppName } from "../app-name/app-name";

@Component({
	selector: "app-header",
	imports: [RouterLink, RouterLinkActive, AppName],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	protected headerRoutes: Array<tRoute> = [
		AppRoutes.home,
		AppRoutes.quizList,
		AppRoutes.leaderboard,
	];
}
