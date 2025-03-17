import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {StorageFieldInterface} from '@/App/Abstracts/Interfaces/StorageFieldInterface';
import {StorageItemType} from '@/App/Abstracts/Types/StorageItemType';

export abstract class StorageAbstract<T extends StorageItemType> implements StorageInterface<T> {
	protected readonly DataFieldInstance: StorageFieldInterface<Record<number, T>>;
	protected readonly IDFieldInstance: StorageFieldInterface<number>;
	protected id: number;

	constructor(DataFieldInstance: StorageFieldInterface<Record<number, T>>, IDFieldInstance: StorageFieldInterface<number>) {
		this.DataFieldInstance = DataFieldInstance;
		this.IDFieldInstance = IDFieldInstance;
		this.id = this.IDFieldInstance.get();
	}

	add(item: Omit<T, 'id'>): T {
		const data = this.DataFieldInstance.get();
		const newItem: T = {} as T;
		Object.assign(newItem, item, {id: this.id});

		data[this.id] = newItem;
		this.DataFieldInstance.set(data);
		
		this.id++;

		this.IDFieldInstance.set(this.id);

		return newItem;
	}

	set(item: T): void {
		const data = this.DataFieldInstance.get();
		data[item.id] = item;
		this.DataFieldInstance.set(data);
	}

	get(id: number): T | false {
		const data = this.DataFieldInstance.get();
		const item = data[id];

		if ( !item ) {
			return false;
		}

		return item;
	}

	getAll(): Record<number, T> {
		return this.DataFieldInstance.get();
	}

	delete(id: number): T | false {
		const data = this.DataFieldInstance.get();
		const item = this.get(id);

		if ( !item ) {
			return false;
		}

		delete data[id];
		this.DataFieldInstance.set(data);

		return item;
	}

	deleteAll(): void {
		this.DataFieldInstance.clear();
	}
}