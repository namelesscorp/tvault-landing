import { MetadataRoute } from "next";

import { getBaseUrl } from "~/utils/seo";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = getBaseUrl();

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/"],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
