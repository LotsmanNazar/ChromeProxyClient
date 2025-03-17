import {ComponentHTMLElementInterface} from '@/App/Abstracts/Interfaces/ComponentHTMLElementInterface';

export abstract class ComponentHTMLElementAbstract extends HTMLElement implements ComponentHTMLElementInterface {
	protected abstract readonly htmlTag: string;
	readonly root: ShadowRoot;

	constructor() {
		super();

		this.root = this.attachShadow({mode: 'closed'});
	}

	protected abstract customConnectedCallback(): void;

	protected initEvent() {
		const PublicCustomEventInstance = new CustomEvent(this.htmlTag + '-init', {
			bubbles: true,
			composed: true,
			detail: {
				element: this
			}
		});

		this.root.dispatchEvent(PublicCustomEventInstance);

		const PrivateCustomEventInstance = new CustomEvent('init', {
			bubbles: false,
			composed: false
		});

		this.root.dispatchEvent(PrivateCustomEventInstance);
	}

	protected connectedCallback() {
		this.customConnectedCallback();
		this.initEvent();
	}

	getTag(): string {
		return this.htmlTag;
	}
}