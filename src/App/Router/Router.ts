import {RouterInterface} from '@/App/Abstracts/Interfaces/RouterInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {PageBehaviorsListType} from '@/App/Components/Page/Page';

export class Router implements RouterInterface {
	private readonly pages: Map<string, ComponentBehaviorsableInterface<PageBehaviorsListType>>;

	constructor() {
		this.pages = new Map();
	}

	register(route: string, PageHTMLElementInstance: ComponentBehaviorsableInterface<PageBehaviorsListType>): void {
		this.pages.set(route, PageHTMLElementInstance);
	}

	get(route: string): ComponentBehaviorsableInterface<PageBehaviorsListType> {
		const PageHTMLElementInstance = this.pages.get(route);

		if ( !PageHTMLElementInstance ) {
			throw new Error('Страница ' + route + ' не найдена');
		}

		return PageHTMLElementInstance;
	}
}