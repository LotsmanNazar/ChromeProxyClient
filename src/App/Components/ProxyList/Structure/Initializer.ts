import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';
import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {ProxyStorageInterface} from '@/App/Abstracts/Interfaces/ProxyStorageInterface';
import {ComponentInitializerAbstract} from '@/App/Abstracts/Abstracts/ComponentInitializerAbstract';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {Factory} from './Factory';

type ProxySorage = StorageInterface<ProxyItemType> & ProxyStorageInterface;

export class Initializer extends ComponentInitializerAbstract {
	protected readonly FactoryInstance: ComponentFactoryInterface;

	constructor(ProxySorageInstance: ProxySorage) {
		super('custom-proxy-list');
		
		this.FactoryInstance = new Factory(ProxySorageInstance);
	}
}