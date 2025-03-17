import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {ComponentTemplateInterface} from '@/App/Abstracts/Interfaces/ComponentTemplateInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export class InsertProxyItemBehavior implements ComponentBehaviorInterface<ProxyItemType> {
	private readonly CustomHTMLElementInstance: ComponentHTMLElementInterface;
	private readonly ProxyItemTemplateInstance: ComponentTemplateInterface;

	constructor(CustomHTMLElementInstance: ComponentHTMLElementInterface, ProxyItemTemplateInstance: ComponentTemplateInterface) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxyItemTemplateInstance = ProxyItemTemplateInstance;
	}

	do(args: ProxyItemType): void {
		const wrapper = this.CustomHTMLElementInstance.root.querySelector('.settings-proxy-list-wrapper') as HTMLElement;
		const item = this.ProxyItemTemplateInstance.renderTemplate(wrapper) as HTMLElement;
		const ipWrapper = item.querySelector('.settings-proxy-list-item-ip') as HTMLElement;
		const typeWrapper = item.querySelector('.settings-proxy-list-item-type') as HTMLElement;
		const nameWrapper = item.querySelector('.settings-proxy-list-item-name span') as HTMLElement;

		if ( !wrapper || !ipWrapper || !typeWrapper || !nameWrapper ) {
			return;
		}
		
		item.style['opacity'] = '0';
		item.setAttribute('data-id', args.id.toString());
		ipWrapper.innerHTML = args.ip + ':' + args.port;
		typeWrapper.innerHTML = args.type;
		nameWrapper.innerHTML = args.name;

		// For animation
		item.offsetWidth;
		item.style['opacity'] = '1';
	}
}