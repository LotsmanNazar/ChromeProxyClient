import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export type BehaviorsListType = {
	insertProxyItems: ComponentBehaviorInterface<{
		proxyList: Record<string, ProxyItemType>,
		selectedProxy: ProxyItemType | false
	}>;
}