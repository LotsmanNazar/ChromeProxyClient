import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';

export type HandlersListType = {
	init: EventHandlerInterface<CustomEvent, undefined>;
}