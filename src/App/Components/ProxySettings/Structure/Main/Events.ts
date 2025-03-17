import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentEventsAbstract} from '@/App/Abstracts/Abstracts/ComponentEventsAbstract';
import {HandlersListType} from '../Types/HandlersListType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentHandlersableInterface<HandlersListType>;

export class Events extends ComponentEventsAbstract<CustomHTMLElementType> {
	initEvents(root: ShadowRoot): void {
		const listWrapper = root.querySelector('.settings-proxy-list-wrapper');
		if ( listWrapper ) {
			listWrapper.addEventListener('click', (e) => {
				const ExpandHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('removeProxyItem');
				ExpandHandlerInstance.handle(undefined, e as MouseEvent);
			})
		}

		const settingsFrom = root.querySelector('.proxy-settings-form');
		if ( settingsFrom ) {
			settingsFrom.addEventListener('submit', (e) => {
				const AddProxyItemHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('addProxyItem');
				AddProxyItemHandlerInstance.handle(undefined, e as SubmitEvent);
			});
		}

		root.addEventListener('init', (e) => {
			const InitHandlerInstance = this.CustomHTMLElementInstance.HandlersInstance.get('init');
			InitHandlerInstance.handle();
		});
	}
}