import {StorageItemType} from '@/App/Abstracts/Types/StorageItemType';

export type ProxyItemType = StorageItemType & {
	name: string;
	ip: string;
	port: string;
	type: string;
	user: string;
	password: string;
}