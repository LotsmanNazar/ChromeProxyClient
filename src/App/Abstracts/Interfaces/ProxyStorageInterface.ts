import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export interface ProxyStorageInterface {
	getCount(): number;
	getSelectedProxy(): ProxyItemType | false;
	setSelectedProxy(id: number): void;
}