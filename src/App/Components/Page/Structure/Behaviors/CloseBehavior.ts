import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;

export class CloseBehavior implements ComponentBehaviorInterface<void> {
	private CustomHTMLElementInstance: CustomHTMLElementType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}

	do(): void {
		const activeClass = 'page-active';
		const wrapper = this.CustomHTMLElementInstance.root.querySelector('.page-wrapper') as HTMLElement;

		if ( !wrapper ) {
			return;
		}

		wrapper.classList.remove(activeClass);
		this.CustomHTMLElementInstance.StateInstance.change('open', false);
	}
}