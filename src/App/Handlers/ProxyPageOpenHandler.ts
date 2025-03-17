import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ProxyListHandlersListType} from '@/App/Components/ProxyList/ProxyList';

export class ProxyPageOpenHandler implements EventHandlerInterface<CustomEvent, undefined> {
	handle(args: undefined, event: CustomEvent): void {
		const page = event.target as HTMLElement;
		const proxyList = page.querySelector('custom-proxy-list') as unknown as ComponentHandlersableInterface<ProxyListHandlersListType>;
		
		if ( !proxyList ) {
			return;
		}
	
		const InitHandlerInstance = proxyList.HandlersInstance.get('init');
		InitHandlerInstance.handle();
	}
}