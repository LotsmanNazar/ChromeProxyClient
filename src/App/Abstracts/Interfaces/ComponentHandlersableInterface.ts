import {ImmutableContainerInterface} from '@/App/Abstracts/Interfaces/ImmutableContainerInterface';

export interface ComponentHandlersableInterface<H> {
	readonly HandlersInstance: ImmutableContainerInterface<H>
}