import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';

type CustomHTMLElementType = ComponentStateableInterface<StateType> & ComponentBehaviorsableInterface<BehaviorsListType>;

export class RemoveProxyItemHandler implements EventHandlerInterface<MouseEvent, undefined> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;
	private readonly ProxySorageInstance: StorageInterface<ProxyItemType>;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: StorageInterface<ProxyItemType>) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxySorageInstance = ProxySorageInstance;
	}
	
	handle(args: undefined, event: MouseEvent): void {
		const RemoveProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('removeProxyItem');

		const targetElement = event.target as HTMLElement;
		const element = targetElement.closest('.settings-proxy-list-item') as HTMLElement;
		const removeButton = targetElement.closest('.settings-proxy-list-item-remove') as HTMLElement;
		const containsClass = targetElement.classList.contains('settings-proxy-list-item-remove');
		const status = element.getAttribute('data-deleted') ?? false;

		if ( (!removeButton && !containsClass) || !element || status ) {
			return;
		}

		const id = parseInt(element.getAttribute('data-id') as string) as number;
		element.setAttribute('data-deleted', '1');
		RemoveProxyItemBehaviorInstance.do(id);
		this.ProxySorageInstance.delete(id);

		let count = this.CustomHTMLElementInstance.StateInstance.get('count');
		this.CustomHTMLElementInstance.StateInstance.change('count', count - 1);
	}
}