import {ComponentInitializerInterface} from '@/App/Abstracts/Interfaces/ComponentInitializerInterface';
import {ComponentFactoryInterface} from '@/App/Abstracts/Interfaces/ComponentFactoryInterface';

export abstract class ComponentInitializerAbstract implements ComponentInitializerInterface {
	protected abstract readonly FactoryInstance: ComponentFactoryInterface;
	protected readonly htmlTag: string;

	constructor(htmlTag: string) {
		this.htmlTag = htmlTag;
	}

	init(): void {
		customElements.define(this.htmlTag, this.FactoryInstance.create(this.htmlTag));
	}
}