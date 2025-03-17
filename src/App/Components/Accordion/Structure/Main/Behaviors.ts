import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {ExpandBehavior} from '../Behaviors/ExpandBehavior';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;

export class Behaviors extends ImmutableContainerAbstract<BehaviorsListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		super({
			expand: new ExpandBehavior(CustomHTMLElementInstance)
		});
	}
}