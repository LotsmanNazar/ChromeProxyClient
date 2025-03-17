import {StorageFieldAbstract} from '@/App/Abstracts/Abstracts/StorageFieldAbstract';

export class ProxySelectedIDField extends StorageFieldAbstract<number> {
	constructor(field: string) {
		super(field, 0);
	}
}