import {ProxyConfiguratorInterface} from '@/App/Abstracts/Interfaces/ProxyConfiguratorInterface';
import {ProxyConfigType} from '@/App/Abstracts/Types/ProxyConfigType';
import {ProxyItemType} from '@/App/Abstracts/Types/ProxyItemType';

export class ProxyConfigurator implements ProxyConfiguratorInterface {
	configure(proxyItem: ProxyItemType): ProxyConfigType {
		const config: ProxyConfigType = {
			mode: 'fixed_servers',
			rules: {
				bypassList: ['<local>'],
				singleProxy: {
					scheme: proxyItem.type.toLowerCase(),
					host: proxyItem.ip,
					port: parseInt(proxyItem.port)
				}
			}
		}

		if ( proxyItem.user && proxyItem.password ) {
			config.rules.singleProxy.username = proxyItem.user;
			config.rules.singleProxy.password = proxyItem.password;
		}

		return config;
	}
}