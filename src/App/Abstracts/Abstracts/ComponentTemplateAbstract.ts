import {ComponentTemplateInterface} from '@/App/Abstracts/Interfaces/ComponentTemplateInterface';

export abstract class ComponentTemplateAbstract implements ComponentTemplateInterface {
	protected readonly template: HTMLTemplateElement;

	constructor() {
		this.template = document.createElement('template');
		this.template.innerHTML = this.html();
	}

	protected abstract html(): string;

	renderTemplate(root: ShadowRoot | HTMLElement): HTMLElement {
		root.appendChild(this.template.content.cloneNode(true));

		return root.querySelector(':scope > :last-child') as HTMLElement;
	}
}