import {StorageInterface} from '@/App/Abstracts/Interfaces/StorageInterface';
import {EventHandlerInterface} from '@/App/Abstracts/Interfaces/EventHandlerInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorsableInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorsableInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';
import {StateType} from '../Types/StateType';
import {BehaviorsListType} from '../Types/BehaviorsListType';

type CustomHTMLElementType = ComponentStateableInterface<StateType> & ComponentBehaviorsableInterface<BehaviorsListType>;

export class AddProxyItemHandler implements EventHandlerInterface<SubmitEvent, undefined> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;
	private readonly ProxySorageInstance: StorageInterface<ProxyItemType>;
	private readonly maxCount: number;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType, ProxySorageInstance: StorageInterface<ProxyItemType>, maxCount: number) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
		this.ProxySorageInstance = ProxySorageInstance;
		this.maxCount = maxCount;
	}
	
	protected validate(formData: FormData): false | Omit<ProxyItemType, 'id'> {
		const ip = formData.get('proxyIP') ? formData.get('proxyIP') as string : '';
		const port = formData.get('proxyPort') ? formData.get('proxyPort') as string : '';
		const type = formData.get('proxyType') ? formData.get('proxyType') as string : '';
		const name = formData.get('proxyName') ? formData.get('proxyName') as string : '';
		const user = formData.get('proxyUser') ? formData.get('proxyUser') as string : '';
		const password = formData.get('proxyPassword') ? formData.get('proxyPassword') as string : '';
		const count = this.CustomHTMLElementInstance.StateInstance.get('count');

		if ( this.maxCount === count ) {
			throw new Error('Максимальное количество элементов в списке ' + this.maxCount);
		}
		
		if ( !ip || !port || !type || !name ) {
			throw new Error('Заполните все обязательные поля');
		}

		return {
			ip: ip,
			port: port,
			type: type,
			name: name,
			user: user,
			password: password
		}
	}
	
	handle(args: undefined, event: SubmitEvent): void {
		event.preventDefault();

		const InsertProxyItemBehaviorInstance = this.CustomHTMLElementInstance.BehaviorsInstance.get('insertProxyItem');
		const formElement = event.target as HTMLFormElement;
		const formData = new FormData(formElement);
		const data = this.validate(formData);

		if ( !data ) {
			return;
		}

		const proxyItem = this.ProxySorageInstance.add(data);

		InsertProxyItemBehaviorInstance.do(proxyItem);
		formElement.reset();

		let count = this.CustomHTMLElementInstance.StateInstance.get('count');
		this.CustomHTMLElementInstance.StateInstance.change('count', count + 1);
	}
}