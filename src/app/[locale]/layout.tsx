import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Inter, Nunito_Sans, Roboto } from "next/font/google";
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
	subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
});

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata" });
	const title = t("title");
	const description = t("description");

	return {
		metadataBase: new URL(baseUrl),
		title,
		description,
		icons: {
			icon: "/favicon.png",
		},
		keywords: t("keywords"),
		openGraph: {
			type: "website",
			locale: locale === "ru" ? "ru_RU" : "en_US",
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
			title,
			description,
			images: ["/og.jpg"],
		},
	};
}

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

	return (
		<html lang={locale}>
			<head>
				<GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!} />
				<YandexMetrika YANDEX_METRIKA_ID={process.env.YANDEX_METRIKA_ID!} />
				<Schema locale={locale} />
			</head>
			<body className={`${inter.variable} ${nunitoSans.variable} ${roboto.variable} antialiased`}>
				<NextIntlClientProvider>
					{children}
					<CookieBanner />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
