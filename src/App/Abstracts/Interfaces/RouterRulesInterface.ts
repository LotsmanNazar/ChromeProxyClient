export interface RouterRulesInterface {
	add(route: string, handler: (route: string) => string): void;
	delete(route: string): void;
	check(route: string): string;
}