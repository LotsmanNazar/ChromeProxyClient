import {StorageFieldAbstract} from '@/App/Abstracts/Abstracts/StorageFieldAbstract';

export class ProxyIDField extends StorageFieldAbstract<number> {
	constructor(field: string) {
		super(field, 0);
	}
}