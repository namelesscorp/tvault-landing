import { routing } from "~/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tvault.app";

export function getBaseUrl(): string {
	return BASE_URL;
}

export type Alternates = { canonical: string; languages: Record<string, string> };

export function buildAlternates(locale: string, path: string): Alternates {
	const pathPrefix = path.startsWith("/") ? path : path ? `/${path}` : "";
	const canonical = `${BASE_URL}/${locale}${pathPrefix}`;
	const defaultLocale = routing.defaultLocale;
	const languages: Record<string, string> = {};
	for (const loc of routing.locales) {
		languages[loc] = `${BASE_URL}/${loc}${pathPrefix}`;
	}
	languages["x-default"] = `${BASE_URL}/${defaultLocale}${pathPrefix}`;
	return { canonical, languages };
}
