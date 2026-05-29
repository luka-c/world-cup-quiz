import { Component, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AppRoutes, tRoute } from "../utils/routes";
import { AppName } from "../app-name/app-name";
import { Button } from "../button/button";
import { UiService } from "../services/ui.service";

@Component({
	selector: "app-header",
	imports: [RouterLink, RouterLinkActive, AppName, Button],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	private uiService = inject(UiService);

	protected headerRoutes: Array<tRoute> = [
		AppRoutes.home,
		AppRoutes.quizList,
		AppRoutes.leaderboard,
	];

	protected isMenuOpened = this.uiService.isMenuOpened;

	toggleMobileMenu(value: boolean) {
		this.uiService.setIsMenuOpened(value);
	}
}
