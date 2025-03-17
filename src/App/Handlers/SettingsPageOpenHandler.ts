import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ConnectionButtonHandlersListType} from '@/App/Components/ConnectionButton/ConnectionButton';

export class SettingsPageOpenHandler implements EventHandlerInterface<CustomEvent, undefined> {
	handle(args: undefined, event: CustomEvent): void {
		const connectionButton = document.querySelector('custom-connection-button') as unknown as ComponentHandlersableInterface<ConnectionButtonHandlersListType>;
	
		if ( !connectionButton ) {
			return;
		}
	
		const ConnectionHandlerInstance = connectionButton.HandlersInstance.get('connection');
		ConnectionHandlerInstance.handle('disconnected');
	}
}