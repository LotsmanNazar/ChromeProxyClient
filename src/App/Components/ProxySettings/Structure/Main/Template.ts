import {ComponentTemplateAbstract} from '@/App/Abstracts/Abstracts/ComponentTemplateAbstract';

export class Template extends ComponentTemplateAbstract {
	protected html(): string {
		return `
			<div class="proxy-settings-main-wrapper">
				<div class="settings-proxy-list-wrapper">
					
				</div>

				<div class="proxy-settings-wrapper">
					<form class="proxy-settings-form">
						<h3 class="proxy-settings-title">Добавить прокси</h3>
						
						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyName" placeholder="Название (страна, город)*">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<select name="proxyType">
									<option value="">Выберите тип прокси*</option>
									<option value="HTTP">HTTP</option>
									<option value="HTTPS">HTTPS</option>
									<option value="SOCKS4">SOCKS4</option>
									<option value="SOCKS5">SOCKS5</option>
								</select>
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyIP" placeholder="IP адрес*">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyPort" placeholder="Порт*">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyUser" placeholder="Пользователь (если используется)">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<input type="text" name="proxyPassword" placeholder="Пароль (если используется)">
							</div>
						</div>

						<div class="proxy-setting-wrapper">
							<div class="proxy-setting">
								<button type="submit" class="button button-primary proxy-settings-submit">Добавить</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		`;
	}
}