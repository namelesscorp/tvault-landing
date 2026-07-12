import { getBaseUrl } from "~/utils/seo";

interface BreadcrumbSchemaProps {
	locale: string;
	name: string;
	path: string;
}

const BreadcrumbSchema = ({ locale, name, path }: BreadcrumbSchemaProps) => {
	const baseUrl = getBaseUrl();

	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Trust Vault",
				item: `${baseUrl}/${locale}`,
			},
			{
				"@type": "ListItem",
				position: 2,
				name,
				item: `${baseUrl}/${locale}${path}`,
			},
		],
	};

	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

export { BreadcrumbSchema };
