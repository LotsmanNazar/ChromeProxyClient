import {StorageFieldAbstract} from '@/App/Abstracts/Abstracts/StorageFieldAbstract';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export class ProxyListField extends StorageFieldAbstract<Record<number, ProxyItemType>> {
	constructor(field: string) {
		super(field, {});
	}
}