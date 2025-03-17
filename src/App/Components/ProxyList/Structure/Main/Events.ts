import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentEventsAbstract} from '@/App/Abstracts/Abstracts/ComponentEventsAbstract';
import {HandlersListType} from '../Types/HandlersListType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentHandlersableInterface<HandlersListType>;

export class Events extends ComponentEventsAbstract<CustomHTMLElementType> {
	initEvents(root: ShadowRoot): void {
		const proxyList = root.querySelector('.proxy-list');
		if ( proxyList ) {
			proxyList.addEventListener('change', (e) => {
				const ChangeProxyHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('changeProxy');
				const element = e.target as HTMLInputElement;
				const ListChangeEventInstance = new CustomEvent('proxyListChange', {
					bubbles: true,
					composed: true,
					detail: parseInt(element.value)
				});

				ChangeProxyHandlerInstance.handle();
				root.dispatchEvent(ListChangeEventInstance);
			});
		}
	}
}