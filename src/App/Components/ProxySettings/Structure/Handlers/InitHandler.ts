import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';

type CustomHTMLElementType = ComponentStateableInterface<StateType> & ComponentBehaviorsableInterface<BehaviorsListType>;

export class InitHandler implements EventHandlerInterface<CustomEvent, undefined> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;
	private readonly ProxySorageInstance: StorageInterface<ProxyItemType>;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: StorageInterface<ProxyItemType>) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxySorageInstance = ProxySorageInstance;
	}
	
	handle(): void {
		const InsertProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('insertProxyItem');
		const items = this.ProxySorageInstance.getAll();

		let count = 0;
		for ( const key in items ) {
			const item = items[key];
			InsertProxyItemBehaviorInstance.do(item);
			count++;
		}

		this.CustomHTMLElementInstance.StateInstance.change('count', count);
	}
}