import {ComponentTemplateAbstract} from '@/App/Abstracts/Abstracts/ComponentTemplateAbstract';

export class ProxyItemTemplate extends ComponentTemplateAbstract {
	protected html(): string {
		return `
			<div class="proxy-list-item-wrapper">
				<div class="proxy-list-item">
					<div class="proxy-list-item-info">
						<div class="proxy-list-item-data">
							<span class="proxy-list-item-type"></span>
							<span class="proxy-list-item-ip"></span>
						</div>
						<div class="proxy-list-item-name">
							<span></span>
						</div>
					</div>
					<div class="proxy-list-item-checkbox-wrapper">
						<input type="radio" name="proxyItem">
					</div>
				</div>
			</div>
		`;
	}
}