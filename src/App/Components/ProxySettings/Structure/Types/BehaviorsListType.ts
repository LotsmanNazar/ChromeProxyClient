import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export type BehaviorsListType = {
	insertProxyItem: ComponentBehaviorInterface<ProxyItemType>;
	removeProxyItem: ComponentBehaviorInterface<number>;
}