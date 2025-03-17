import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';

export type BehaviorsListType = {
	open: ComponentBehaviorInterface<void>,
	close: ComponentBehaviorInterface<void>
}