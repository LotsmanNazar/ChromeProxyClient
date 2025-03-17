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

			.proxy-connect-button {
				background-color: transparent;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				position: relative;
				width: 92px;
				height: 92px;
				padding: 0;
				border: none;
				cursor: pointer;
			}

			.proxy-connect-button:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 85px;
				height: 85px;
				border-radius: 100%;
				border: 4px dotted var(--textColor);
				transition: 0.5s;
			}

			.proxy-connect-button svg {
				display: block;
				width: 60px;
				height: 60px;
			}

			.proxy-connect-button svg path {
				fill: var(--textColor);
				transition: 0.5s;
			}

			.proxy-connect-button[data-status="connection"]:before {
				border-color: var(--primaryColor);
				animation: rotate 5s linear infinite;
			}

			.proxy-connect-button[data-status="connected"]:before {
				border-color: var(--green);
			}

			.proxy-connect-button[data-status="connection"] svg path {
				fill: var(--primaryColor);
			}

			.proxy-connect-button[data-status="connected"] svg path {
				fill: var(--green);
			}

			@keyframes rotate {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}

			.proxy-connection-button-wrapper {
				display: flex;
				justify-content: center;
			}

			.proxy-connection-info {
				font-size: 10px;
				text-align: center;
				text-transform: uppercase;
				margin-top: 15px;
			}
		`;
	}
}