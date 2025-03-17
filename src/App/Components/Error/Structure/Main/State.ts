import {MutableContainerAbstract} from '@/App/Abstracts/Abstracts/MutableContainerAbstract';
import {StateType} from '../Types/StateType';

export class State extends MutableContainerAbstract<StateType> {
	constructor() {
		super({
			closed: false
		});
	}
}