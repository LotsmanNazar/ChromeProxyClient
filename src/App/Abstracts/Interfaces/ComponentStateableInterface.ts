import {MutableContainerInterface} from '@/App/Abstracts/Interfaces/MutableContainerInterface';

export interface ComponentStateableInterface<S> {
	readonly StateInstance: MutableContainerInterface<S>;
}