import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {RouterInterface} from '@/App/Abstracts/Interfaces/RouterInterface';
import {BehaviorsListType} from '../Types/BehaviorsListType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentBehaviorsableInterface<BehaviorsListType>;

export class InitHandler implements EventHandlerInterface<CustomEvent, undefined> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;
	private readonly RouterInstance: RouterInterface;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, RouterInstance: RouterInterface) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.RouterInstance = RouterInstance;
	}
	
	handle(): void {
		const route = this.CustomHTMLElementInstance.root.host.getAttribute('data-route');

		if ( !route ) {
			return;
		}

		this.RouterInstance.register(route, this.CustomHTMLElementInstance);
	}
}