import { getTranslations } from "next-intl/server";
import { Fragment } from "react";

import { getAppVersion } from "~/utils/version";

const Schema = async ({ locale }: { locale: string }) => {
	const version = await getAppVersion();
	const t = await getTranslations({ locale, namespace: "metadata" });

	return (
		<Fragment>
			<script type="application/ld+json">
				{`
                    {
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Trust Vault",
                        "alternateName": "TVault",
                        "operatingSystem": ["Windows", "macOS"],
                        "applicationCategory": "SecurityApplication",
                        "softwareVersion": "${version}", 
                        "description": "${t("description")}",
                        "downloadUrl": "https://github.com/namelesscorp/tvault/releases",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Nameless"
                        }
                    }
                `}
			</script>
			<script type="application/ld+json">
				{`
                    {
                        "@context":"https://schema.org",
                        "@type":"Organization",
                        "name":"NameLess",
                        "url":"https://tvault.app/",
                        "logo":"https://tvault.app/nameless_logo.svg",
                        "sameAs":["https://github.com/namelesscorp"]
                    }
                `}
			</script>
			<script type="application/ld+json">
				{`
                    {
                        "@context":"https://schema.org",
                        "@type":"WebSite",
                        "name":"Trust Vault",
                        "url":"https://tvault.app/"
                    }
                `}
			</script>
		</Fragment>
	);
};

export { Schema };
