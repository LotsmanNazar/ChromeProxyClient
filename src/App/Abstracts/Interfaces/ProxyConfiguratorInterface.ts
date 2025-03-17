import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {ProxyConfigType} from '@/App/Abstracts/Types/ProxyConfigType';

export interface ProxyConfiguratorInterface {
	configure(proxyItem: ProxyItemType): ProxyConfigType;
}