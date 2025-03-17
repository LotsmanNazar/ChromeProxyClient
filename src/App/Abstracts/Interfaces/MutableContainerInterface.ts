import {ImmutableContainerInterface} from '@/App/Abstracts/Interfaces/ImmutableContainerInterface';

export interface MutableContainerInterface<T> extends ImmutableContainerInterface<T> {
	change<K extends keyof T>(key: K, value: T[K]): void;
}