import {StorageItemType} from '@/App/Abstracts/Types/StorageItemType';

export interface StorageInterface<T extends StorageItemType> {
	add(item: Omit<T, 'id'>): T;
	set(item: T): void;
	get(id: number): T | false;
	getAll(): Record<number, T>;
	delete(id: number): T | false;
	deleteAll(): void;
}