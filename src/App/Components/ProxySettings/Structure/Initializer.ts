import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {ComponentInitializerAbstract} from '@/App/Abstracts/Abstracts/ComponentInitializerAbstract';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {Factory} from './Factory';

export class Initializer extends ComponentInitializerAbstract {
	protected readonly FactoryInstance: ComponentFactoryInterface;

	constructor(ProxySorageInstance: StorageInterface<ProxyItemType>, maxCount: number) {
		super('custom-proxy-settings');
		
		this.FactoryInstance = new Factory(ProxySorageInstance, maxCount);
	}
}