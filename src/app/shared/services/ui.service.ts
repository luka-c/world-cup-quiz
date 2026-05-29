import {
	computed,
	DestroyRef,
	DOCUMENT,
	inject,
	Injectable,
	linkedSignal,
	signal,
} from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class UiService {
	private document = inject(DOCUMENT);
	private destroyRef = inject(DestroyRef);

	private readonly width = signal(this.document.defaultView?.innerWidth ?? 0);

	constructor() {
		const windowRef = this.document.defaultView;

		if (!windowRef) {
			return;
		}

		const handleResize = () => this.width.set(windowRef.innerWidth);

		windowRef.addEventListener("resize", handleResize);

		this.destroyRef.onDestroy(() => {
			windowRef.removeEventListener("resize", handleResize);
		});
	}

	private isMobile = computed(() =>
		this.width() !== undefined ? this.width()! > 600 : false
	);

	private _isMenuOpened = linkedSignal<boolean, boolean>({
		source: () => this.isMobile(),
		computation: (isMobile, previous) => {
			return isMobile ? (previous?.value ?? false) : false;
		},
	});

	public isMenuOpened = this._isMenuOpened.asReadonly();

	public setIsMenuOpened(value: boolean) {
		this._isMenuOpened.set(value);
	}
}
