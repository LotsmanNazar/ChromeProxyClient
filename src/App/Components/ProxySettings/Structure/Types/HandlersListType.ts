import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';

export type HandlersListType = {
	removeProxyItem: EventHandlerInterface<MouseEvent, undefined>;
	addProxyItem: EventHandlerInterface<SubmitEvent, undefined>;
	init: EventHandlerInterface<CustomEvent, undefined>;
}