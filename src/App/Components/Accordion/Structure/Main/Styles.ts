import {ComponentStylesAbstract} from '@/App/Abstracts/Abstracts/ComponentStylesAbstract';

export class Styles extends ComponentStylesAbstract {
	protected css(): string {
		return `
			:host {
				display: block;
			}

			:host(:not(:last-child)) {
				padding-bottom: 15px;
				margin-bottom: 15px;
				border-bottom: 1px solid var(--textColor);
			}

			.accordion-item-wrapper {
				color: var(--textColor);
			}

			.accordion-item-button {
				background-color: transparent;
				padding: 5px 10px;
				margin-right: -10px;
				border: none;
				transition: 0.5s;
			}

			.accordion-item-button svg {
				display: block;
				width: 15px;
				height: 15px;
			}

			.accordion-item-button svg path {
				fill: var(--textColor);
			}

			.accordion-item-active .accordion-item-button {
				transform: rotate(180deg);
			}

			.accordion-item-title {
				padding-right: 15px;
			}

			.accordion-item-title-wrapper {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				cursor: pointer;
			}

			.accordion-item-content h4 {
				font-size: 18px;
			}

			.accordion-item-content *:not(:last-child) {
				margin-bottom: 10px;
			}

			.accordion-item-content-wrapper {
				overflow: hidden;
				height: 0;
				transition: 0.5s;
			}

			.accordion-item-wrapper:not(:last-child) {
				padding-bottom: 20px;
				margin-bottom: 20px;
				border-bottom: 1px solid var(--textColor);
			}

			.accordion-item-content {
				padding-top: 10px;
			}
		`;
	}
}