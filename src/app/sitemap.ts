import { MetadataRoute } from "next";

import { routing } from "~/i18n/routing";
import { getBaseUrl } from "~/utils/seo";

const LAST_MODIFIED = new Date("2026-07-12");

const pages = [
	{ path: "", priority: 1, changeFrequency: "weekly" as const },
	{ path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/reviews", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/press-kit", priority: 0.6, changeFrequency: "monthly" as const },
	{ path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
	{ path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = getBaseUrl();

	return routing.locales.flatMap(locale =>
		pages.map(({ path, priority, changeFrequency }) => ({
			url: `${baseUrl}/${locale}${path}`,
			lastModified: LAST_MODIFIED,
			changeFrequency,
			priority,
			alternates: {
				languages: {
					...Object.fromEntries(routing.locales.map(loc => [loc, `${baseUrl}/${loc}${path}`])),
					"x-default": `${baseUrl}/${routing.defaultLocale}${path}`,
				},
			},
		})),
	);
}
