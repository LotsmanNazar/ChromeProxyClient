import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType =
	ComponentHTMLElementInterface &
	ComponentStateableInterface<StateType> &
	ComponentBehaviorsableInterface<BehaviorsListType>;

export class ProxyChangeHandler implements EventHandlerInterface<CustomEvent, undefined> {
	private CustomHTMLElementInstance: CustomHTMLElementType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}
	
	handle(): void {
		const ConnectionBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('connection');
		this.CustomHTMLElementInstance.StateInstance.change('status', 'disconnected');
		ConnectionBehaviorInstance.do();
	}
}