import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;
	
export class ExpandBehavior implements ComponentBehaviorInterface<void> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}

	do(): void {
		const activeClass = 'accordion-item-active';

		const wrapper = this.CustomHTMLElementInstance.root.querySelector('.accordion-item-wrapper') as HTMLElement;
		const contentWrapper = this.CustomHTMLElementInstance.root.querySelector('.accordion-item-content-wrapper') as HTMLElement;
		const content = this.CustomHTMLElementInstance.root.querySelector('.accordion-item-content') as HTMLElement;

		if ( !wrapper || !contentWrapper || !content  ) {
			return;
		}

		if ( !this.CustomHTMLElementInstance.StateInstance.get('expand') ) {
			wrapper.classList.add(activeClass);
			contentWrapper.style['height'] = content.offsetHeight + 'px';
			this.CustomHTMLElementInstance.StateInstance.change('expand', true);
		} else {
			wrapper.classList.remove(activeClass);
			contentWrapper.style['height'] = '0';
			this.CustomHTMLElementInstance.StateInstance.change('expand', false);
		}
	}
}