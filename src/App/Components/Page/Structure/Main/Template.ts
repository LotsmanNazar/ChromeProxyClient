import {ComponentTemplateAbstract} from '@/App/Abstracts/Abstracts/ComponentTemplateAbstract';

export class Template extends ComponentTemplateAbstract {
	protected html(): string {
		return `
			<div class="page-wrapper">
				<div class="page">
					<div class="page-content-main-wrapper">
						<div class="page-header">
							<slot name="header"></slot>
						</div>

						<div class="page-content-wrapper">
							<div class="page-content">
								<slot name="content"></slot>
							</div>
						</div>

						<div class="page-footer">
							<slot name="footer"></slot>
						</div>
					</div>
				</div>
			</div>
		`;
	}
}