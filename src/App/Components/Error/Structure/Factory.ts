import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentEventsableInterface} from '@/App/Abstracts/Interfaces/ComponentEventsableInterface';
import {MutableContainerInterface} from '@/App/Abstracts/Interfaces/MutableContainerInterface';
import {ImmutableContainerInterface} from '@/App/Abstracts/Interfaces/ImmutableContainerInterface';
import {ComponentEventsInterface} from '@/App/Abstracts/Interfaces/ComponentEventsInterface';
import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {ComponentHTMLElementAbstract} from '@/App/Abstracts/Abstracts/ComponentHTMLElementAbstract';
import {ComponentHTMLElementConstructorType} from '@/App/Abstracts/Types/ComponentHTMLElementConstructorType';
import {StateType} from './Types/StateType';
import {BehaviorsListType} from './Types/BehaviorsListType';
import {HandlersListType} from './Types/HandlersListType';
import {State} from './Main/State';
import {Behaviors} from './Main/Behaviors';
import {Handlers} from './Main/Handlers';
import {Events} from './Main/Events';
import {Template} from './Main/Template';
import {Styles} from './Main/Styles';

export class Factory implements ComponentFactoryInterface {
	create(htmlTag: string): ComponentHTMLElementConstructorType {
		const TemplateInstance = new Template();
		const StylesInstance = new Styles();

		return class ErrorHTMLElement extends ComponentHTMLElementAbstract implements
			ComponentStateableInterface<StateType>,
			ComponentBehaviorsableInterface<BehaviorsListType>,
			ComponentHandlersableInterface<HandlersListType>,
			ComponentEventsableInterface
		{
			readonly htmlTag: string;
			readonly StateInstance: MutableContainerInterface<StateType>;
			readonly BehaviorsInstance: ImmutableContainerInterface<BehaviorsListType>;
			readonly HandlersInstance: ImmutableContainerInterface<HandlersListType>;
			readonly EventsInstance: ComponentEventsInterface;

			constructor() {
				super();

				this.htmlTag = htmlTag;
				this.StateInstance = new State();
				this.BehaviorsInstance = new Behaviors(this);
				this.HandlersInstance = new Handlers(this);
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