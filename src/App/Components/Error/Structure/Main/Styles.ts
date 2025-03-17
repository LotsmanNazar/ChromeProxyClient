import {ComponentStylesAbstract} from '@/App/Abstracts/Abstracts/ComponentStylesAbstract';

export class Styles extends ComponentStylesAbstract {
	protected css(): string {
		return `
			:host {
				display: block;
				width: 100%;
				margin-bottom: 20px;
			}
				
			:host(:first-child) {
				margin-top: 35px;
			}

			:host(:last-child) {
				margin-bottom: 35px !important;
			}

			* {
				box-sizing: border-box;
			}

			.error-wrapper {
				color: var(--red);
				background-color: var(--blackTransparent2);
				position: relative;
				width: 100%;
				border: 2px solid var(--red);
				border-radius: 20px;
				padding: 20px;
			}

			.error-content {
				padding-right: 20px;
			}

			.error-close {
				background-color: transparent;
				position: absolute;
				top: 5px;
				right: 5px;
				padding: 5px;
				border: none;
				cursor: pointer;
			}

			.error-close svg {
				display: block;
				width: 20px;
				height: 20px;
			}

			.error-close svg path {
				fill: var(--red);
			}
		`;
	}
}