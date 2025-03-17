import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentTemplateInterface} from '@/App/Abstracts/Interfaces/ComponentTemplateInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {StateType} from '../Types/StateType';

type InsertProxyItemsBehaviorArgsType = {
	proxyList: Record<string, ProxyItemType>,
	selectedProxy: ProxyItemType | false
};

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;

export class InsertProxyItemsBehavior implements ComponentBehaviorInterface<InsertProxyItemsBehaviorArgsType> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;
	private readonly ProxyItemTemplateInstance: ComponentTemplateInterface;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxyItemTemplateInstance: ComponentTemplateInterface) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxyItemTemplateInstance = ProxyItemTemplateInstance;
	}

	do(args: InsertProxyItemsBehaviorArgsType): void {
		const wrapper = this.CustomHTMLElementInstance.root.querySelector('.proxy-list') as HTMLElement;
		if ( !wrapper ) {
			return;
		}

		wrapper.innerHTML = '';
		
		for ( const key in args.proxyList ) {
			const proxyItem = args.proxyList[key];

			const item = this.ProxyItemTemplateInstance.renderTemplate(wrapper);
			const ipWrapper = item.querySelector('.proxy-list-item-ip') as HTMLElement;
			const typeWrapper = item.querySelector('.proxy-list-item-type') as HTMLElement;
			const nameWrapper = item.querySelector('.proxy-list-item-name span') as HTMLElement;
			const input = item.querySelector('input');

			if ( !ipWrapper || !typeWrapper || !nameWrapper || !input ) {
				return;
			}

			ipWrapper.innerHTML = proxyItem.ip + ':' + proxyItem.port;
			typeWrapper.innerHTML = proxyItem.type;
			nameWrapper.innerHTML = proxyItem.name;
			input.value = proxyItem.id.toString();
		}

		let selectedID = 0;
		if ( args.selectedProxy ) {
			const item = wrapper.querySelector('input[value="' + args.selectedProxy.id + '"]') as HTMLInputElement;
			selectedID = args.selectedProxy.id;
			if ( item ) {
				item.checked = true;
			}
		} else {
			const item = wrapper.querySelector('.proxy-list-item-wrapper:first-child input') as HTMLInputElement;
			if ( item ) {
				item.checked = true;
				selectedID = parseInt(item.value);
			}
		}

		this.CustomHTMLElementInstance.StateInstance.change('selected', selectedID);
	}
}