import {ProxyManager} from '@/App/Proxy/ProxyManager';
import {ProxyConfigurator} from '@/App/Proxy/ProxyConfigurator';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export class Proxy {
	constructor() {
		this.init();
	}

	protected init() {
		const ProxyConfiguratorInstance = new ProxyConfigurator();
		const ProxyManagerInstance = new ProxyManager(ProxyConfiguratorInstance);

		chrome.runtime.onMessage.addListener((requset: ProxyItemType | false) => {
			if ( requset ) {
				ProxyManagerInstance.connect(requset);
			} else {
				ProxyManagerInstance.disconnect();
			}
		});
	}
}