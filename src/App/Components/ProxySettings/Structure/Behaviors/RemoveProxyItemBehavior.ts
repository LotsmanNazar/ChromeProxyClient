import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';

export class RemoveProxyItemBehavior implements ComponentBehaviorInterface<number> {
	private readonly CustomHTMLElementInstance: ComponentHTMLElementInterface;

	constructor(CustomHTMLElementInstance: ComponentHTMLElementInterface) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}

	do(id: number): void {
		const wrapper = this.CustomHTMLElementInstance.root.querySelector('.settings-proxy-list-item[data-id="' + id + '"]') as HTMLElement;
		if ( !wrapper ) {
			return;
		}

		wrapper.style['opacity'] = '0';
		wrapper.style['transition'] = '0.5s';

		setTimeout(() => {
			wrapper.remove();
		}, 500);
	}
}