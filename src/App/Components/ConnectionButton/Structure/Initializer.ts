import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {ComponentInitializerAbstract} from '@/App/Abstracts/Abstracts/ComponentInitializerAbstract';
import {Factory} from './Factory';

export class Initializer extends ComponentInitializerAbstract {
	protected readonly FactoryInstance: ComponentFactoryInterface;

	constructor(ProxySorageInstance: ProxyStorageInterface) {
		super('custom-connection-button');
		
		this.FactoryInstance = new Factory(ProxySorageInstance);
	}
}