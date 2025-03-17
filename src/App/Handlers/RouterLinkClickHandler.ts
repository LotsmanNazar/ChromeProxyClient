import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {PagesControllerInterface} from '@/App/Abstracts/Interfaces/PagesControllerInterface';

export class RouterLinkClickHandler implements EventHandlerInterface<MouseEvent, undefined> {
	private PagesControllerInstance: PagesControllerInterface;

	constructor(PagesControllerInstance: PagesControllerInterface) {
		this.PagesControllerInstance = PagesControllerInstance;
	}

	handle(args: undefined, event: MouseEvent): void {
		let routeLink = event.target as HTMLElement;
		if ( !routeLink.classList.contains('router-link') ) {
			routeLink = routeLink.closest('.router-link') as HTMLElement;
		}

		if ( !routeLink ) {
			return;
		}

		event.preventDefault();
		const route = routeLink.getAttribute('href');
		if ( !route ) {
			return;
		}

		this.PagesControllerInstance.switch(route);
	}
}