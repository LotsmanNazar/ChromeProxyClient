import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';
import {ComponentStateableInterface} from '@/App/Abstracts/Interfaces/ComponentStateableInterface';
import {ComponentBehaviorInterface} from '@/App/Abstracts/Interfaces/ComponentBehaviorInterface';
import {StateType} from '../Types/StateType';

type CustomHTMLElementType = ComponentHTMLElementInterface & ComponentStateableInterface<StateType>;

export class ConnectionBehavior implements ComponentBehaviorInterface<void> {
	private readonly CustomHTMLElementInstance: CustomHTMLElementType;

	constructor(CustomHTMLElementInstance: CustomHTMLElementType) {
		this.CustomHTMLElementInstance = CustomHTMLElementInstance;
	}

	do(): void {
		const connectionButton = this.CustomHTMLElementInstance.root.querySelector('.proxy-connect-button') as HTMLElement;
		const statusLabel = this.CustomHTMLElementInstance.root.querySelector('.proxy-status') as HTMLElement;
		const status = this.CustomHTMLElementInstance.StateInstance.get('status');

		if ( !connectionButton || !statusLabel ) {
			return;
		}

		connectionButton.setAttribute('data-status', status);
		statusLabel.innerText = statusLabel.getAttribute('data-' + status) as string;
	}
}