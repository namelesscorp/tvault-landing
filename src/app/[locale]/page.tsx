import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fragment } from "react";

import { Capabilities } from "~/components/Capabilities";
import { Download } from "~/components/Download";
import { Hero } from "~/components/Hero";
import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { Overview } from "~/components/Overview";
import { Roadmap } from "~/components/Roadmap";
import { Versions } from "~/components/Versions";
import { WhoIs } from "~/components/WhoIs";
import { buildAlternates, getBaseUrl } from "~/utils/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const path = "";
	const canonicalUrl = `${getBaseUrl()}/${locale}${path}`;
	return {
		alternates: buildAlternates(locale, path),
		openGraph: { url: canonicalUrl },
		twitter: { card: "summary_large_image" },
	};
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const headersList = await headers();
	const userAgent = headersList.get("user-agent") || "";

	return (
		<Fragment>
			<LayoutHeader />
			<main>
				<Hero locale={locale} />
				<Capabilities locale={locale} />
				<Overview locale={locale} />
				<WhoIs locale={locale} />
				<Versions locale={locale} />
				<Download locale={locale} userAgent={userAgent} />
				<Roadmap locale={locale} />
			</main>
			<LayoutFooter />
		</Fragment>
	);
}
