import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';

type CustomHTMLElementType = ComponentStateableInterface<StateType> & ComponentBehaviorsableInterface<BehaviorsListType>;
type ProxyStorageType = StorageInterface<ProxyItemType> & ProxyStorageInterface;

export class InitHandler implements EventHandlerInterface<CustomEvent, undefined> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;
	private readonly ProxySorageInstance: ProxyStorageType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: ProxyStorageType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxySorageInstance = ProxySorageInstance;
	}
	
	handle(): void {
		const InsertProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('insertProxyItems');
		const selectedProxy = this.ProxySorageInstance.getSelectedProxy();
		const proxyItems = this.ProxySorageInstance.getAll();

		InsertProxyItemBehaviorInstance.do({
			proxyList: proxyItems,
			selectedProxy: selectedProxy
		});

		this.ProxySorageInstance.setSelectedProxy(this.CustomHTMLElementInstance.StateInstance.get('selected'));
	}
}