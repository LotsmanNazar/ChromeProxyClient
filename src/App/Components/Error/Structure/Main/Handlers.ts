import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {HandlersListType} from '../Types/HandlersListType';
import {CloseHandler} from '../Handlers/CloseHandler';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType = ComponentStateableInterface<StateType> & ComponentBehaviorsableInterface<BehaviorsListType>;

export class Handlers extends ImmutableContainerAbstract<HandlersListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		super({
			close: new CloseHandler(CustomHTMLElementInstance)
		});
	}
}