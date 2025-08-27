import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Inter, Nunito_Sans, Roboto } from "next/font/google";
import { notFound } from "next/navigation";

import { GoogleAnalytics } from "~/components/GoogleAnalytics";
import { YandexMetrika } from "~/components/YandexMetrika";
import { routing } from "~/i18n/routing";

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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: t("title"),
		description: t("description"),
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
			<GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!} />
			<YandexMetrika YANDEX_METRIKA_ID={process.env.YANDEX_METRIKA_ID!} />
			<body className={`${inter.variable} ${nunitoSans.variable} ${roboto.variable} antialiased`}>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
