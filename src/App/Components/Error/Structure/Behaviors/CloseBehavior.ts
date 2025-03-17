import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';

export class CloseBehavior implements ComponentBehaviorInterface<void> {
	private readonly CustomHTMLElementInstance: ComponentHTMLElementInterface;

	constructor(CustomHTMLElementInstance: ComponentHTMLElementInterface) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}

	do(): void {
		const wrapper = this.CustomHTMLElementInstance.root.host as HTMLElement;
		wrapper.style['transition'] = '0.5s';
		wrapper.style['opacity'] = '0';

		setTimeout(() => {
			wrapper.remove();
		}, 500);
	}
}