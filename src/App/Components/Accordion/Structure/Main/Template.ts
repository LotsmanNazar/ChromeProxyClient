import {ComponentTemplateAbstract} from '@/App/Abstracts/Abstracts/ComponentTemplateAbstract';

export class Template extends ComponentTemplateAbstract {
	protected html(): string {
		return `
			<div class="accordion-item-wrapper">
				<div class="accordion-item">
					<div class="accordion-item-title-wrapper">
						<span class="accordion-item-title">
							<slot name="accordion-title"></slot>
						</span>
						<button type="button" class="accordion-item-button">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
						</button>
					</div>
					<div class="accordion-item-content-wrapper">
						<div class="accordion-item-content">
							<slot name="accordion-content"></slot>
						</div>
					</div>
				</div>
			</div>
		`;
	}
}