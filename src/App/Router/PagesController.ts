import {PagesControllerInterface} from '@/App/Abstracts/Interfaces/PagesControllerInterface';
import {RouterInterface} from '@/App/Abstracts/Interfaces/RouterInterface';
import {RouterRulesInterface} from '@/App/Abstracts/Interfaces/RouterRulesInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {PageBehaviorsListType} from '@/App/Components/Page/Page';

export class PagesController implements PagesControllerInterface {
	private RouterInstance: RouterInterface;
	private RouterRulesInstance: RouterRulesInterface;
	private CurrentPageHTMLElementInstance: ComponentBehaviorsableInterface<PageBehaviorsListType> | false;

	constructor(RouterInstance: RouterInterface, RouterRulesInstance: RouterRulesInterface) {
		this.RouterInstance = RouterInstance;
		this.RouterRulesInstance = RouterRulesInstance;
		this.CurrentPageHTMLElementInstance = false;
	}

	switch(route: string): void {
		const rewriteRoute = this.RouterRulesInstance.check(route);
		const NextPageHTMLElementInstance = this.RouterInstance.get(rewriteRoute);

		if ( NextPageHTMLElementInstance === this.CurrentPageHTMLElementInstance ) {
			return;
		}
		
		NextPageHTMLElementInstance.BehaviorsInstance.get('open').do();

		if ( this.CurrentPageHTMLElementInstance ) {
			this.CurrentPageHTMLElementInstance.BehaviorsInstance.get('close').do();
		}

		this.CurrentPageHTMLElementInstance = NextPageHTMLElementInstance;
	}
}