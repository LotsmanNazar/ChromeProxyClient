export interface ComponentHTMLElementInterface extends HTMLElement {
	readonly root: ShadowRoot;
	getTag(): string;
}