import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {HandlersListType} from '../Types/HandlersListType';
import {InitHandler} from '../Handlers/InitHandler';
import {ChangeProxyHandler} from '../Handlers/ChangeProxyHandler';

type CustomHTMLElementType =
	ComponentHTMLElementInterface &
	ComponentStateableInterface<StateType> &
	ComponentBehaviorsableInterface<BehaviorsListType>;

type ProxySorageType = StorageInterface<ProxyItemType> & ProxyStorageInterface;

export class Handlers extends ImmutableContainerAbstract<HandlersListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: ProxySorageType) {
		super({
			init: new InitHandler(CustomHTMLElementInstance, ProxySorageInstance),
			changeProxy: new ChangeProxyHandler(CustomHTMLElementInstance, ProxySorageInstance)
		})
	}
}