import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentTemplateInterface} from '@/App/Abstracts/Interfaces/ComponentTemplateInterface';
import {ImmutableContainerAbstract} from '@/App/Abstracts/Abstracts/ImmutableContainerAbstract';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {InsertProxyItemBehavior} from '../Behaviors/InsertProxyItemBehavior';
import {RemoveProxyItemBehavior} from '../Behaviors/RemoveProxyItemBehavior';

export class Behaviors extends ImmutableContainerAbstract<BehaviorsListType> {
	constructor(CustomHTMLElementInstance: ComponentHTMLElementInterface, ProxyItemTemplateInstance: ComponentTemplateInterface) {
		super({
			insertProxyItem: new InsertProxyItemBehavior(CustomHTMLElementInstance, ProxyItemTemplateInstance),
			removeProxyItem: new RemoveProxyItemBehavior(CustomHTMLElementInstance)
		});
	}
}