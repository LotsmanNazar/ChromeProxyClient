import {ImmutableContainerInterface} from '@/App/Abstracts/Interfaces/ImmutableContainerInterface';

export interface ComponentBehaviorsableInterface<B> {
	readonly BehaviorsInstance: ImmutableContainerInterface<B>
}