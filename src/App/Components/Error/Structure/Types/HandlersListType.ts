import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';

export type HandlersListType = {
	close: EventHandlerInterface<MouseEvent, undefined>;
}