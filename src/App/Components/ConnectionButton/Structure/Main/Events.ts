import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentEventsAbstract} from '@/App/Abstracts/Abstracts/ComponentEventsAbstract';
import {HandlersListType} from '../Types/HandlersListType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentHandlersableInterface<HandlersListType>;

export class Events extends ComponentEventsAbstract<CustomHTMLElementType> {
	initEvents(root: ShadowRoot): void {
		const connectionButton = root.querySelector('.proxy-connect-button') as HTMLElement;
		if ( connectionButton ) {
			connectionButton.addEventListener('click', (e) => {
				const ConnectionHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('connection');
				ConnectionHandlerInstance.handle();
			});
		}

		const proxyList = document.querySelector('custom-proxy-list') as HTMLElement;
		if ( proxyList ) {
			proxyList.addEventListener('proxyListChange', (e) => {
				const ProxyChangeHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('proxyChange');
				ProxyChangeHandlerInstance.handle();
			});
		}
	}
}