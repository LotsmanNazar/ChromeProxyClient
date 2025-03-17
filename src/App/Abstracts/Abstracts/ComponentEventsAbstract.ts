import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentEventsInterface} from '@/App/Abstracts/Interfaces/ComponentEventsInterface';

export abstract class ComponentEventsAbstract<T extends ComponentHTMLElementInterface> implements ComponentEventsInterface {
	protected CustomHTMLElementInstance: T;

	constructor(CustomHTMLElementInstance: T) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}

	abstract initEvents(root: ShadowRoot): void;
}