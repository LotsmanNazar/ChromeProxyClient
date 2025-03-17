import {RouterRulesInterface} from '@/App/Abstracts/Interfaces/RouterRulesInterface';

export class RouterRules implements RouterRulesInterface {
	private rules: Map<string, (route: string) => string>;

	constructor() {
		this.rules = new Map();
	}

	add(route: string, handler: (route: string) => string): void {
		this.rules.set(route, handler);
	}

	delete(route: string): void {
		this.rules.delete(route);
	}

	check(route: string): string {
		const handler = this.rules.get(route);
		if ( !handler ) {
			return route;
		}

		return handler(route);
	}
}