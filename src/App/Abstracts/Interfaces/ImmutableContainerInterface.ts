export interface ImmutableContainerInterface<T> {
	get<K extends keyof T>(key: K): T[K];
	getKeys(): Array<keyof T>;
}