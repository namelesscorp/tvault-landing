import { getTranslations } from "next-intl/server";

import { getAppVersion } from "~/utils/release";
import { getBaseUrl } from "~/utils/seo";

const Schema = async ({ locale }: { locale: string }) => {
	const version = await getAppVersion();
	const t = await getTranslations({ locale, namespace: "metadata" });
	const baseUrl = getBaseUrl();

	const organizationId = `${baseUrl}/#organization`;
	const websiteId = `${baseUrl}/#website`;

	const graph = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": organizationId,
				name: "Nameless",
				url: baseUrl,
				logo: `${baseUrl}/nameless_logo.svg`,
				sameAs: ["https://github.com/namelesscorp", "https://x.com/tvault_app", "https://t.me/tvault_app"],
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				name: "Trust Vault",
				url: baseUrl,
				inLanguage: locale,
				publisher: { "@id": organizationId },
			},
			{
				"@type": "SoftwareApplication",
				"@id": `${baseUrl}/#software`,
				name: "Trust Vault",
				alternateName: "TVault",
				url: baseUrl,
				operatingSystem: "Windows, macOS, Linux",
				applicationCategory: "SecurityApplication",
				applicationSubCategory: "Encryption Software",
				softwareVersion: version,
				description: t("description"),
				image: `${baseUrl}/og.jpg`,
				screenshot: `${baseUrl}/og.jpg`,
				downloadUrl: "https://github.com/namelesscorp/tvault/releases",
				softwareHelp: `${baseUrl}/${locale}/faq`,
				isAccessibleForFree: true,
				featureList: [
					"AES-256 encryption",
					"Shamir's Secret Sharing",
					"Offline encrypted containers",
					"No account or server required",
					"Open source",
				],
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "USD",
				},
				publisher: { "@id": organizationId },
			},
		],
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
};

export { Schema };
