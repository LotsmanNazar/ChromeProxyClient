import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {RouterInterface} from '@/App/Abstracts/Interfaces/RouterInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {HandlersListType} from '../Types/HandlersListType';
import {InitHandler} from '../Handlers/InitHandler';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentBehaviorsableInterface<BehaviorsListType>;

export class Handlers extends ImmutableContainerAbstract<HandlersListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType, RouterInstance: RouterInterface) {
		super({
			init: new InitHandler(CustomHTMLElementInstance, RouterInstance),
		})
	}
}