import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ComponentEventsableInterface} from '@/App/Abstracts/Interfaces/ComponentEventsableInterface';
import {ComponentEventsInterface} from '@/App/Abstracts/Interfaces/ComponentEventsInterface';
import {MutableContainerInterface} from '@/App/Abstracts/Interfaces/MutableContainerInterface';
import {ImmutableContainerInterface} from '@/App/Abstracts/Interfaces/ImmutableContainerInterface';
import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {RouterInterface} from '@/App/Abstracts/Interfaces/RouterInterface';
import {ComponentHTMLElementAbstract} from '@/App/Abstracts/Abstracts/ComponentHTMLElementAbstract';
import {ComponentHTMLElementConstructorType} from '@/App/Abstracts/Types/ComponentHTMLElementConstructorType';
import {StateType} from './Types/StateType';
import {HandlersListType} from './Types/HandlersListType';
import {BehaviorsListType} from './Types/BehaviorsListType';
import {State} from './Main/State';
import {Handlers} from './Main/Handlers';
import {Behaviors} from './Main/Behaviors';
import {Events} from './Main/Events';
import {Template} from './Main/Template';
import {Styles} from './Main/Styles';

export class Factory implements ComponentFactoryInterface {
	private readonly RouterInstance: RouterInterface;

	constructor(RouterInstance: RouterInterface) {
		this.RouterInstance = RouterInstance;
	}

	create(htmlTag: string): ComponentHTMLElementConstructorType {
		const TemplateInstance = new Template();
		const StylesInstance = new Styles();
		const RouterInstance = this.RouterInstance;

		return class PageHTMLElement extends ComponentHTMLElementAbstract implements
			ComponentStateableInterface<StateType>,
			ComponentHandlersableInterface<HandlersListType>,
			ComponentBehaviorsableInterface<BehaviorsListType>,
			ComponentEventsableInterface
		{
			protected readonly htmlTag: string;
			readonly StateInstance: MutableContainerInterface<StateType>;
			readonly HandlersInstance: ImmutableContainerInterface<HandlersListType>;
			readonly BehaviorsInstance: ImmutableContainerInterface<BehaviorsListType>;
			readonly EventsInstance: ComponentEventsInterface;

			constructor() {
				super();

				this.htmlTag = htmlTag;
				this.StateInstance = new State();
				this.HandlersInstance = new Handlers(this, RouterInstance);
				this.BehaviorsInstance = new Behaviors(this);
				this.EventsInstance = new Events(this);
			}

			protected customConnectedCallback(): void {
				TemplateInstance.renderTemplate(this.root);
				StylesInstance.renderStyles(this.root);
				this.EventsInstance.initEvents(this.root);
			}
		};
	}
}