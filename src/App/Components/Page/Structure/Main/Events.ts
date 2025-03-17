import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentEventsAbstract} from '@/App/Abstracts/Abstracts/ComponentEventsAbstract';
import {HandlersListType} from '../Types/HandlersListType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentHandlersableInterface<HandlersListType>;

export class Events extends ComponentEventsAbstract<CustomHTMLElementType> {
	initEvents(root: ShadowRoot): void {
		root.addEventListener('init', (e) => {
			const InitHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('init');
			InitHandlerInstance.handle();
		});
	}
}