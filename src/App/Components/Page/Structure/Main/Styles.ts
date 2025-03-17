import {ComponentStylesAbstract} from '@/App/Abstracts/Abstracts/ComponentStylesAbstract';

export class Styles extends ComponentStylesAbstract {
	protected css(): string {
		return `
			* {
				box-sizing: border-box;
			}

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

			.page-wrapper {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;
				width: 100%;
				height: 100%;
				transform: translateX(-100%);
				transition: 0.35s;
			}

			.page-wrapper.page-active {
				z-index: 2;
				transform: none;
			}

			.page {
				position: relative;
				width: 100%;
				height: 100%;
			}

			.page-content-main-wrapper {
			    display: flex;
				flex-wrap: wrap;
    			align-items: flex-end;
				height: 100%;
			}

			.page-footer {
				position: absolute;
				left: 0;
				bottom: 50px;
				width: 100%;
			}

			.page-header {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 1;
				width: 100%;
				padding: 20px 35px 15px 35px;
			}

			.page-content-wrapper {
				color: var(--textColor);
				background-color: var(--blackTransparent1);
				width: 100%;
				height: 100%;
				overflow: hidden;
				padding: 55px 20px 100px 20px;
				backdrop-filter: blur(3px);
			}

			.page-content {
				height: 100%;
				overflow: auto;
				padding: 0 15px;
			}
		`;
	}
}