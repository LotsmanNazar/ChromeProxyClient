import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentTemplateInterface} from '@/App/Abstracts/Interfaces/ComponentTemplateInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {InsertProxyItemsBehavior} from '../Behaviors/InsertProxyItemsBehavior';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;

export class Behaviors extends ImmutableContainerAbstract<BehaviorsListType> {
	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxyItemTemplateInstance: ComponentTemplateInterface) {
		super({
			insertProxyItems: new InsertProxyItemsBehavior(CustomHTMLElementInstance, ProxyItemTemplateInstance)
		});
	}
}