import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';

export class ErrorsHandler implements EventHandlerInterface<Event, string | Event> {
	handle(message: string | Event): void {
		const errorsWrapper = document.querySelector('.extension-errors-wrapper');
		let errorMessage = '';

		if ( typeof message == 'string' ) {
			errorMessage = message.replace('Uncaught Error: ', '');
		} else {
			errorMessage = 'Ошибка, попробуйте ещё раз'
		}

		errorsWrapper?.insertAdjacentHTML('beforeend', '<custom-error>' + errorMessage + '</custom-error>');
	}
}