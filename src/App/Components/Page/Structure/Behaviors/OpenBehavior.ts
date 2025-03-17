import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;

export class OpenBehavior implements ComponentBehaviorInterface<void> {
	private CustomHTMLElementInstance: CustomHTMLElementType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}

	do(): void {
		const activeClass = 'page-active';
		const wrapper = this.CustomHTMLElementInstance.root.querySelector('.page-wrapper') as HTMLElement;
		const content = wrapper.querySelector('.page-content') as HTMLElement;

		if ( !wrapper || !content ) {
			return;
		}
		
		wrapper.classList.add(activeClass);
		content.scrollTo(0, 0);

		this.CustomHTMLElementInstance.StateInstance.change('open', true);

		const route = this.CustomHTMLElementInstance.root.host.getAttribute('data-route');
		if ( route ) {
			const ListChangeEventInstance = new CustomEvent(route + 'Open', {
				bubbles: true,
				composed: true
			});

			this.CustomHTMLElementInstance.root.dispatchEvent(ListChangeEventInstance);
		}
	}
}