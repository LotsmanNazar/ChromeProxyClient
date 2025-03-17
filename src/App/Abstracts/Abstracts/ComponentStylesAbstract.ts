import {ComponentStylesInterface} from '@/App/Abstracts/Interfaces/ComponentStylesInterface';

export abstract class ComponentStylesAbstract implements ComponentStylesInterface {
	protected readonly styles: CSSStyleSheet;

	constructor() {
		this.styles = new CSSStyleSheet();
		this.styles.replaceSync(this.css());
	}
	
	protected abstract css(): string;

	renderStyles(root: ShadowRoot): void {
		root.adoptedStyleSheets = [this.styles];
	}
}