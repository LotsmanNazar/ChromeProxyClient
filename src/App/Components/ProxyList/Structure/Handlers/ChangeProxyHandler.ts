import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;

export class ChangeProxyHandler implements EventHandlerInterface<Event, undefined> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;
	private readonly ProxySorageInstance: ProxyStorageInterface;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: ProxyStorageInterface) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxySorageInstance = ProxySorageInstance;
	}
	
	handle(): void {
		const item = this.CustomHTMLElementInstance.root.querySelector('.proxy-list-item-wrapper input[type="radio"]:checked') as HTMLInputElement;

		if ( !item ) {
			return;
		}

		const id = parseInt(item.value);
		this.ProxySorageInstance.setSelectedProxy(id);
		this.CustomHTMLElementInstance.StateInstance.change('selected', id);
	}
}