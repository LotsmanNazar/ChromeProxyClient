export type ProxyConfigType = {
	mode: 'fixed_servers',
	rules: {
		bypassList: ['<local>']
		singleProxy: {
			scheme: string,
			host: string,
			port: number;
			username?: string;
			password?: string;
		}
	}
}