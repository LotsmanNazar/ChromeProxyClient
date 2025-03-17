import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';

import {PageBehaviorsListType} from '@/App/Components/Page/Page';

export interface RouterInterface {
	register(route: string, PageInstance: ComponentBehaviorsableInterface<PageBehaviorsListType>): void;
	get(route: string): ComponentBehaviorsableInterface<PageBehaviorsListType>;
}