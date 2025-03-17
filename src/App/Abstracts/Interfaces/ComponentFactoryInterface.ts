import {ComponentHTMLElementConstructorType} from '@/App/Abstracts/Types/ComponentHTMLElementConstructorType';

export interface ComponentFactoryInterface {
	create(htmlTag: string): ComponentHTMLElementConstructorType;
}