import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';

export type HandlersListType = {
	connection: EventHandlerInterface<Event, 'disconnected'>;
	proxyChange: EventHandlerInterface<CustomEvent, undefined>;
}