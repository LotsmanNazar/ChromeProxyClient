import {ComponentTemplateAbstract} from '@/App/Abstracts/Abstracts/ComponentTemplateAbstract';

export class Template extends ComponentTemplateAbstract {
	protected html(): string {
		return `
			<div class="proxy-list-wrapper">
				<div class="proxy-list"></div>
			</div>
		`;
	}
}