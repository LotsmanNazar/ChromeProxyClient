import {ProxyManagerInterface} from '@/App/Abstracts/Interfaces/ProxyManagerInterface';
import {ProxyConfiguratorInterface} from '@/App/Abstracts/Interfaces/ProxyConfiguratorInterface';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export class ProxyManager implements ProxyManagerInterface {
	private readonly ProxyConfiguratorInstance: ProxyConfiguratorInterface;

	constructor(ProxyConfiguratorInstance: ProxyConfiguratorInterface) {
		this.ProxyConfiguratorInstance = ProxyConfiguratorInstance;
	}

	connect(proxyItem: ProxyItemType): void {
		const config = this.ProxyConfiguratorInstance.configure(proxyItem);
		// to do: error handler and success callback
		chrome.proxy.settings.set({
			value: config,
			scope: 'regular'
		});
	}

	disconnect(): void {
		chrome.proxy.settings.clear({scope: 'regular'});
	}
}