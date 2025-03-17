import {ComponentTemplateAbstract} from '@/App/Abstracts/Abstracts/ComponentTemplateAbstract';

export class Template extends ComponentTemplateAbstract {
	protected html(): string {
		return `
			<div class="proxy-connection-wrapper">
				<div class="proxy-connection-button-wrapper">
					<button class="proxy-connect-button" data-status="disconnected">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"></path></svg>
					</button>
				</div>
				
				<div class="proxy-connection-info">
					<span class="proxy-status" data-disconnected="Отключено" data-connected="Подключено" data-connection="Подключение...">Отключено</span>
				</div>
			</div>
		`;
	}
}