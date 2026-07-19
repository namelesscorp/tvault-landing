import type { Metadata } from "next";

import { routing } from "~/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tvault.app";

export function getBaseUrl(): string {
	return BASE_URL;
}

const OG_IMAGE = {
	url: "/og.jpg",
	width: 1200,
	height: 630,
	alt: "Trust Vault — Secure Data Storage and Transfer",
};

/**
 * Full Open Graph block for a page. Next.js merges metadata only shallowly, so a page that
 * returns its own `openGraph` REPLACES the layout's — always build the complete object here
 * (incl. images) instead of returning a partial `{ url }`, otherwise og:image is dropped.
 */
export function buildOpenGraph(locale: string, url: string): Metadata["openGraph"] {
	return {
		type: "website",
		locale: locale === "ru" ? "ru_RU" : "en_US",
		alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
		url,
		siteName: "Trust Vault",
		images: [OG_IMAGE],
	};
}

/** Full Twitter card block. Same shallow-merge caveat as {@link buildOpenGraph}. */
export function buildTwitter(): Metadata["twitter"] {
	return {
		card: "summary_large_image",
		site: "@tvault_app",
		creator: "@tvault_app",
		images: ["/og.jpg"],
	};
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
