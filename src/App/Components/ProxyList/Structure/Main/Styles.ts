import {ComponentStylesAbstract} from '@/App/Abstracts/Abstracts/ComponentStylesAbstract';

export class Styles extends ComponentStylesAbstract {
	protected css(): string {
		return `
			:host {
				display: block;
			}

			::-webkit-scrollbar {
				width: 5px;
			}

			::-webkit-scrollbar-track {
				background-color: transparent;
			}

			::-webkit-scrollbar-thumb {
				background-color: var(--secondaryColor);
				border-radius: 10px;
				transition: 0.5s;
			}
		
			::-webkit-scrollbar-thumb:hover {
				background-color: var(--primaryColor);
			}

			* {
				box-sizing: border-box;
			}

			.proxy-list-item-type {
				line-height: 1;
				display: inline-block;
				padding-right: 10px;
				margin-right: 5px;
				border-right: 1px solid var(--textColor);
			}

			.proxy-list-item-name {
				font-size: 12px;
				text-transform: uppercase;
			}

			.proxy-list-item {
				position: relative;
			}

			.proxy-list-item-checkbox-wrapper {
				position: absolute;
				top: calc(50% - 12px);
				right: 0;
				z-index: 1;
			}

			.proxy-list-item-checkbox-wrapper input[type="radio"] {
				width: 24px;
				height: 24px;
				margin: 0;
				cursor: pointer;
			}

			.proxy-list-item-info {
				padding-right: 50px;
			}

			.proxy-list-item-wrapper:not(:last-child) {
				padding-bottom: 25px;
				margin-bottom: 25px;
				border-bottom: 1px solid var(--textColor);
			}

			.proxy-list {
				height: 245px;
				overflow: auto;
				padding: 0 10px;
				margin: 0 -10px;
			}
		`;
	}
}