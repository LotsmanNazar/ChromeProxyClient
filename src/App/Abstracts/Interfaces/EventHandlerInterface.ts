export interface EventHandlerInterface<E extends Event, A> {
	handle(args?: A, event?: E): void;
}