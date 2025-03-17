import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {BehaviorsListType} from '../Types/BehaviorsListType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentBehaviorsableInterface<BehaviorsListType>;

export class ExpandHandler implements EventHandlerInterface<MouseEvent, undefined> {
	private CustomHTMLElementInstance: CustomHTMLElementType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}
	
	handle(): void {
		const ExpandBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('expand');
		ExpandBehaviorInstance.do();
	}
}