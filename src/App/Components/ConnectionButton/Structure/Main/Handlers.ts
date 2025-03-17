import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {HandlersListType} from '../Types/HandlersListType';
import {ConnectionHandler} from '../Handlers/ConnectionHandler';
import {ProxyChangeHandler} from '../Handlers/ProxyChangeHandler';

type CustomHTMLElementType =
	ComponentHTMLElementInterface &
	ComponentStateableInterface<StateType> &
	ComponentBehaviorsableInterface<BehaviorsListType>;

export class Handlers extends ImmutableContainerAbstract<HandlersListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: ProxyStorageInterface) {
		super({
			connection: new ConnectionHandler(CustomHTMLElementInstance, ProxySorageInstance),
			proxyChange: new ProxyChangeHandler(CustomHTMLElementInstance)
		})
	}
}