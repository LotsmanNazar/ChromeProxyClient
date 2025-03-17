import {ImmutableContainerInterface} from '@/App/Abstracts/Interfaces/ImmutableContainerInterface';

export abstract class ImmutableContainerAbstract<T extends {}> implements ImmutableContainerInterface<T> {
	protected readonly items: T;
	private readonly keys: Array<keyof T>;

	constructor(items: T) {
		this.items = items;
		this.keys = Object.keys(this.items) as Array<keyof T>;
	}

	get<K extends keyof T>(key: K): T[K] {
		return this.items[key];
	}

	getKeys(): (keyof T)[] {
		return this.keys;
	}
}