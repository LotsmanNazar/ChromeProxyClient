import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {HandlersListType} from '../Types/HandlersListType';
import {RemoveProxyItemHandler} from '../Handlers/RemoveProxyItemHandler';
import {AddProxyItemHandler} from '../Handlers/AddProxyItemHandler';
import {InitHandler} from '../Handlers/InitHandler';

type CustomHTMLElementType = ComponentStateableInterface<StateType> & ComponentBehaviorsableInterface<BehaviorsListType>;

export class Handlers extends ImmutableContainerAbstract<HandlersListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: StorageInterface<ProxyItemType>, maxCount: number) {
		super({
			removeProxyItem: new RemoveProxyItemHandler(CustomHTMLElementInstance, ProxySorageInstance),
			addProxyItem: new AddProxyItemHandler(CustomHTMLElementInstance, ProxySorageInstance, maxCount),
			init: new InitHandler(CustomHTMLElementInstance, ProxySorageInstance)
		})
	}
}