export interface StorageFieldInterface<T> {
	set(data: T): void;
	get(): T;
	clear(): T;
}