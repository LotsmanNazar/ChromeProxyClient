import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ComponentHandlersableInterface} from '@/App/Abstracts/Interfaces/ComponentHandlersableInterface';
import {ComponentEventsableInterface} from '@/App/Abstracts/Interfaces/ComponentEventsableInterface';
import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {ImmutableContainerInterface} from '@/App/Abstracts/Interfaces/ImmutableContainerInterface';
import {MutableContainerInterface} from '@/App/Abstracts/Interfaces/MutableContainerInterface';
import {ComponentEventsInterface} from '@/App/Abstracts/Interfaces/ComponentEventsInterface';
import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {ComponentHTMLElementAbstract} from '@/App/Abstracts/Abstracts/ComponentHTMLElementAbstract';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {ComponentHTMLElementConstructorType} from '@/App/Abstracts/Types/ComponentHTMLElementConstructorType';
import {BehaviorsListType} from './Types/BehaviorsListType';
import {HandlersListType} from './Types/HandlersListType';
import {State} from './Main/State';
import {Behaviors} from './Main/Behaviors';
import {Handlers} from './Main/Handlers';
import {Events} from './Main/Events';
import {Template} from './Main/Template';
import {ProxyItemTemplate} from './Main/ProxyItemTemplate';
import {Styles} from './Main/Styles';
import {StateType} from './Types/StateType';

type ProxySorage = StorageInterface<ProxyItemType> & ProxyStorageInterface;

export class Factory implements ComponentFactoryInterface {
	private readonly ProxySorageInstance: ProxySorage;

	constructor(ProxySorageInstance: ProxySorage) {
		this.ProxySorageInstance = ProxySorageInstance;
	}

	create(htmlTag: string): ComponentHTMLElementConstructorType {
		const TemplateInstance = new Template();
		const ProxyItemTemplateInstance = new ProxyItemTemplate();
		const StylesInstance = new Styles();
		const ProxySorageInstance = this.ProxySorageInstance;

		return class ProxyListHTMLElement extends ComponentHTMLElementAbstract implements
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
				this.BehaviorsInstance = new Behaviors(this, ProxyItemTemplateInstance);
				this.HandlersInstance = new Handlers(this, ProxySorageInstance);
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