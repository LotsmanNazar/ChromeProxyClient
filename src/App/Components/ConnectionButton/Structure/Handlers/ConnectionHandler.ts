import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType =
	ComponentHTMLElementInterface &
	ComponentStateableInterface<StateType> &
	ComponentBehaviorsableInterface<BehaviorsListType>;

export class ConnectionHandler implements EventHandlerInterface<Event, 'disconnected'> {
	private CustomHTMLElementInstance: CustomHTMLElementType;
	private ProxyStorageInstance: ProxyStorageInterface;
	private timeoutID: NodeJS.Timeout | false;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxyStorageInstance: ProxyStorageInterface) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxyStorageInstance = ProxyStorageInstance;
		this.timeoutID = false;
	}
	
	handle(forceStatus: 'disconnected'): void {
		const ConnectionBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('connection');
		const proxyItem = this.ProxyStorageInstance.getSelectedProxy();
		const status = this.CustomHTMLElementInstance.StateInstance.get('status');

		if ( !forceStatus && status === 'disconnected' ) {
			if ( !proxyItem ) {
				throw new Error('Прокси сервер не выбран');
			}

			this.CustomHTMLElementInstance.StateInstance.change('status', 'connection');
			chrome.runtime.sendMessage(proxyItem);
			
			// to do: add real connection check
			// to do: add save connection state to storage
			this.timeoutID = setTimeout(() => {
				this.CustomHTMLElementInstance.StateInstance.change('status', 'connected');
				ConnectionBehaviorInstance.do();
			}, 2000);
		} else {
			this.CustomHTMLElementInstance.StateInstance.change('status', 'disconnected');
			chrome.runtime.sendMessage(false);

			if ( this.timeoutID ) {
				clearTimeout(this.timeoutID);
			}
		}

		ConnectionBehaviorInstance.do();
	}
}