import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {ComponentInitializerAbstract} from '@/App/Abstracts/Abstracts/ComponentInitializerAbstract';
import {Factory} from './Factory';

export class Initializer extends ComponentInitializerAbstract {
	protected readonly FactoryInstance: ComponentFactoryInterface;

	constructor() {
		super('custom-error');
		
		this.FactoryInstance = new Factory();
	}
}