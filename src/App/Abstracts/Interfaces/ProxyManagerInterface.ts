import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export interface ProxyManagerInterface {
	connect(proxyItem: ProxyItemType): void;
	disconnect(): void;
}