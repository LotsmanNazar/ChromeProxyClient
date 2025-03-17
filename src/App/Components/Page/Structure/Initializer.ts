import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {RouterInterface} from '@/App/Abstracts/Interfaces/RouterInterface';
import {ComponentInitializerAbstract} from '@/App/Abstracts/Abstracts/ComponentInitializerAbstract';
import {Factory} from './Factory';

export class Initializer extends ComponentInitializerAbstract {
	protected readonly FactoryInstance: ComponentFactoryInterface;

	constructor(RouterInstance: RouterInterface) {
		super('custom-page');
		
		this.FactoryInstance = new Factory(RouterInstance);
	}
}