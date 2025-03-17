import {AccordionInitializer} from '@/App/Components/Accordion/Accordion';
import {PageInitializer} from '@/App/Components/Page/Page';
import {ProxySettingsInitializer} from '@/App/Components/ProxySettings/ProxySettings';
import {ProxyListInitializer} from '@/App/Components/ProxyList/ProxyList';
import {ConnectionButtonInitializer} from '@/App/Components/ConnectionButton/ConnectionButton';
import {ErrorInitializer} from '@/App/Components/Error/Error';
import {Router} from '@/App/Router/Router';
import {RouterRules} from '@/App/Router/RouterRules';
import {PagesController} from '@/App/Router/PagesController';
import {ProxyIDField} from '@/App/Storage/ProxyIDField';
import {ProxySelectedIDField} from '@/App/Storage/ProxySelectedIDField';
import {ProxyListField} from '@/App/Storage/ProxyListField';
import {ProxyStorage} from '@/App/Storage/ProxyStorage';
import {ProxyPageOpenHandler} from '@/App/Handlers/ProxyPageOpenHandler';
import {SettingsPageOpenHandler} from '@/App/Handlers/SettingsPageOpenHandler';
import {RouterLinkClickHandler} from '@/App/Handlers/RouterLinkClickHandler';
import {ErrorsHandler} from '@/App/Handlers/ErrorsHandler';

export class App {
	constructor() {
		this.init();
	}

	protected init() {
		const ProxyIDFieldInstance = new ProxyIDField('proxyIDIncrement');
		const ProxySelectedIDFieldInstance = new ProxySelectedIDField('proxySelectedID');
		const ProxyListFieldInstance = new ProxyListField('proxyList');
		const ProxyStorageInstance = new ProxyStorage(ProxyListFieldInstance, ProxyIDFieldInstance, ProxySelectedIDFieldInstance);
		const RouterRulesInstance = new RouterRules();
		const RouterInstance = new Router();
		const PagesControllerInstance = new PagesController(RouterInstance, RouterRulesInstance);
		const AccordionInitializerInstance = new AccordionInitializer();
		const PageInitializerInstance = new PageInitializer(RouterInstance);
		const ProxySettingsInitializerInstance = new ProxySettingsInitializer(ProxyStorageInstance, 5);
		const ProxyListInitializerInstance = new ProxyListInitializer(ProxyStorageInstance);
		const ConnectionButtonInitializerInstance = new ConnectionButtonInitializer(ProxyStorageInstance);
		const ErrorInitializerInstance = new ErrorInitializer();
		const ProxyPageOpenHandlerInstance = new ProxyPageOpenHandler();
		const SettingsPageOpenHandlerInstance = new SettingsPageOpenHandler();
		const RouterLinkClickHandlerInstance = new RouterLinkClickHandler(PagesControllerInstance);
		const ErrorsHandlerInstance = new ErrorsHandler();

		RouterRulesInstance.add('#startPage', (route: string) => {
			if ( ProxyStorageInstance.getCount() ) {
				return '#proxyPage';
			}

			return route;
		});

		document.addEventListener('#proxyPageOpen', (e) => {
			ProxyPageOpenHandlerInstance.handle(undefined, e as CustomEvent);
		});

		document.addEventListener('#settingsPageOpen', (e) => {
			SettingsPageOpenHandlerInstance.handle(undefined, e as CustomEvent);
		});

		document.addEventListener('click', (e) => {
			RouterLinkClickHandlerInstance.handle(undefined, e as MouseEvent);
		});

		window.onerror = (message) => {
			ErrorsHandlerInstance.handle(message);
		}

		AccordionInitializerInstance.init();
		PageInitializerInstance.init();
		ProxySettingsInitializerInstance.init();
		ProxyListInitializerInstance.init();
		ConnectionButtonInitializerInstance.init();
		ErrorInitializerInstance.init();
		PagesControllerInstance.switch('#startPage');
	}
}