import {MutableContainerInterface} from '@/App/Abstracts/Interfaces/MutableContainerInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';

export abstract class MutableContainerAbstract<T extends {}> extends ImmutableContainerAbstract<T> implements  MutableContainerInterface<T> {
	change<K extends keyof T>(key: K, value: T[K]): void {
		this.items[key] = value;
	}
}