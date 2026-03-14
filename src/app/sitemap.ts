import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tvault.app";
	const locales = ["en", "ru"];

	const pagePaths = ["", "/reviews", "/press-kit", "/privacy", "/terms", "/faq"];

	return locales.flatMap(locale =>
		pagePaths.map(path => ({
			url: `${baseUrl}/${locale}${path}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: path === "" ? 1 : 0.8,
		})),
	);
}
