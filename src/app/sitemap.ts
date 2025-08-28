import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tvault.app";
	const locales = ["en", "ru"];

	const routes = locales.map(locale => ({
		url: `${baseUrl}/${locale}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 1,
	}));

	routes.unshift({
		url: baseUrl,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 1,
	});

	return routes;
}
