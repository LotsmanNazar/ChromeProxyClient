import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {BehaviorsListType} from '../Types/BehaviorsListType';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType = ComponentStateableInterface<StateType> & ComponentBehaviorsableInterface<BehaviorsListType>;

export class CloseHandler implements EventHandlerInterface<MouseEvent, undefined> {
	private CustomHTMLElementInstance: CustomHTMLElementType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}
	
	handle(): void {
		if ( this.CustomHTMLElementInstance.StateInstance.get('closed') ) {
			return;
		}

		const CloseBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('close');
		CloseBehaviorInstance.do();
		this.CustomHTMLElementInstance.StateInstance.change('closed', true);
	}
}