import {StorageFieldInterface} from '@/App/Abstracts/Interfaces/StorageFieldInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {StorageAbstract} from '@/App/Abstracts/Abstracts/StorageAbstract';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export class ProxyStorage extends StorageAbstract<ProxyItemType> implements ProxyStorageInterface {
	private readonly ProxySelectedIDFieldInstance: StorageFieldInterface<number>;

	constructor(
		ProxyListFieldInstance: StorageFieldInterface<Record<number, ProxyItemType>>,
		ProxyIDFieldInstance: StorageFieldInterface<number>,
		ProxySelectedIDFieldInstance: StorageFieldInterface<number>
	) {
		super(ProxyListFieldInstance, ProxyIDFieldInstance);

		this.ProxySelectedIDFieldInstance = ProxySelectedIDFieldInstance;
	}

	getCount(): number {
		return Object.keys(this.getAll()).length;
	}

	getSelectedProxy(): ProxyItemType | false {
		return this.get(this.ProxySelectedIDFieldInstance.get());
	}

	setSelectedProxy(id: number): void {
		this.ProxySelectedIDFieldInstance.set(id);
	}
}