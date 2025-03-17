import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentEventsAbstract} from '@/App/Abstracts/Abstracts/ComponentEventsAbstract';
import {HandlersListType} from '../Types/HandlersListType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentHandlersableInterface<HandlersListType>;

export class Events extends ComponentEventsAbstract<CustomHTMLElementType> {
	initEvents(root: ShadowRoot): void {
		const errorWrapper = root.querySelector('.error-wrapper');
		if ( errorWrapper ) {
			errorWrapper.addEventListener('click', (e) => {
				const CloseHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('close');
				CloseHandlerInstance.handle();
			})
		}
	}
}