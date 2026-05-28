import { Component, input } from "@angular/core";
import { tButtonVariant } from "../types/button-variant";

@Component({
	selector: "button[appBtn]",
	standalone: true,
	imports: [],
	template: `
		<ng-content></ng-content>
	`,
	styleUrl: "./button.scss",
	host: {
		"[attr.data-variant]": "variant()",
	},
})
export class Button {
	public variant = input<tButtonVariant>("outline");
}
