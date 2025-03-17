import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {HandlersListType} from '../Types/HandlersListType';
import {ExpandHandler} from '../Handlers/ExpandHandler';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentBehaviorsableInterface<BehaviorsListType>;

export class Handlers extends ImmutableContainerAbstract<HandlersListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		super({
			expand: new ExpandHandler(CustomHTMLElementInstance)
		});
	}
}