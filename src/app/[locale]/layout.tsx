import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { CookieBanner } from "~/components/CookieBanner";
import { GoogleAnalytics } from "~/components/GoogleAnalytics";
import { Schema } from "~/components/Schema";
import { YandexMetrika } from "~/components/YandexMetrika";
import { routing } from "~/i18n/routing";
import { getBaseUrl } from "~/utils/seo";

import "../globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin", "cyrillic"],
	display: "swap",
});

const baseUrl = getBaseUrl();

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata" });
	const title = t("title");
	const description = t("description");

	return {
		metadataBase: new URL(baseUrl),
		title,
		description,
		applicationName: "Trust Vault",
		authors: [{ name: "Nameless", url: "https://github.com/namelesscorp" }],
		creator: "Nameless",
		publisher: "Nameless",
		icons: {
			icon: "/favicon.png",
			shortcut: "/favicon.ico",
			apple: "/favicon.png",
		},
		keywords: t("keywords"),
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-image-preview": "large",
				"max-snippet": -1,
				"max-video-preview": -1,
			},
		},
		openGraph: {
			type: "website",
			locale: locale === "ru" ? "ru_RU" : "en_US",
			alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
			url: `${baseUrl}/${locale}`,
			title,
			description,
			siteName: "Trust Vault",
			images: [
				{
					url: "/og.jpg",
					width: 1200,
					height: 630,
					alt: "Trust Vault — Secure Data Storage and Transfer",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			site: "@tvault_app",
			creator: "@tvault_app",
			title,
			description,
			images: ["/og.jpg"],
		},
	};
}

export const viewport: Viewport = {
	themeColor: "#3A73ED",
	colorScheme: "light",
};

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<head>
				<GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!} />
				{locale === "ru" && <YandexMetrika YANDEX_METRIKA_ID={process.env.YANDEX_METRIKA_ID!} />}
				<Schema locale={locale} />
			</head>
			<body className={`${inter.variable} antialiased`}>
				<NextIntlClientProvider>
					{children}
					<CookieBanner />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
