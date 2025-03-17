import {ComponentStylesAbstract} from '@/App/Abstracts/Abstracts/ComponentStylesAbstract';

export class Styles extends ComponentStylesAbstract {
	protected css(): string {
		return `
			:host {
				display: block;
			}

			* {
				box-sizing: border-box;
			}

			.button {
				color: var(--secondaryTextColor);
				background-color: var(--secondaryColor);
				display: inline-block;
				padding: 15px 15px;
				border: none;
				border-radius: 10px;
				cursor: pointer;
				transition: 0.5s;
			}

			.button-primary {
				color: var(--primaryTextColor);
				background-color: var(--primaryColor);
			}

			.proxy-setting input,
			.proxy-setting select {
				font-family: 'Roboto';
				font-size: 16px;
				color: var(--textColor);
				background-color: transparent;
				width: 100%;
				padding: 15px 20px;
				border: 1px solid var(--textColor);
				border-radius: 10px;
				outline: none;
			}

			.proxy-setting select option {
				background-color: var(--primaryTextColor);
			}

			.proxy-setting ::placeholder {
				color: var(--textColor);
			}

			.proxy-setting-wrapper:not(:last-child) {
				margin-bottom: 15px;
			}

			.settings-proxy-list-wrapper {
				padding-bottom: 25px;
				margin-bottom: 20px;
				border-bottom: 1px solid var(--textColor);
			}

			.proxy-settings-submit {
				width: 100%;
			}

			.settings-proxy-list-item {
				position: relative;
				padding: 15px 35px 15px 15px;
				border: 1px solid var(--textColor);
				border-radius: 10px;
				transition: 0.5s;
			}

			.settings-proxy-list-item:not(:last-child) {
				margin-bottom: 15px;
			}

			.settings-proxy-list-item-type {
				line-height: 1;
				display: inline-block;
				padding-right: 10px;
				margin-right: 5px;
				border-right: 1px solid var(--textColor);
			}

			.settings-proxy-list-item-name {
				font-size: 12px;
				text-transform: uppercase;
			}

			.settings-proxy-list-item-remove-wrapper {
				position: absolute;
				top: calc(50% - 10px);
				right: 8px;
				z-index: 1;
			}

			.settings-proxy-list-item-remove {
				background-color: transparent;
				display: block;
				position: relative;
				border: none;
				cursor: pointer;
			}

			.settings-proxy-list-item-remove svg {
				display: block;
				width: 20px;
				height: 20px;
			}

			.settings-proxy-list-item-remove svg path {
				fill: var(--textColor);
			}
		`;
	}
}