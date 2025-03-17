import {StorageFieldInterface} from '@/App/Abstracts/Interfaces/StorageFieldInterface';

export class StorageFieldAbstract<T> implements StorageFieldInterface<T> {
	protected readonly storage: Storage;
	protected readonly field: string;
	protected readonly initValue: T;

	constructor(field: string, initValue: T) {
		this.storage = localStorage;
		this.field = field;
		this.initValue = initValue;

		this.init();
	}

	protected init(): void {
		const data = this.storage.getItem(this.field);
		if ( !data ) {
			this.clear();
		}
	}

	protected toJSON(data: T): string {
		return JSON.stringify(data);
	}

	protected toData(json: string): T {
		return JSON.parse(json);
	}

	get(): T {
		const data = this.storage.getItem(this.field) as string;
		return this.toData(data);
	}

	set(data: T): void {
		const jsonData = this.toJSON(data);
		this.storage.setItem(this.field, jsonData);
	}

	clear(): T {
		const data = this.get();
		this.storage.setItem(this.field, this.toJSON(this.initValue));

		return data;
	}
}