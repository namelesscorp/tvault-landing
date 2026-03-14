import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";

import { Gallery } from "~/components/Gallery";
import { IGalleryItemProps } from "~/components/GalleryItem/GalleryItem.model";
import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { cn } from "~/utils/css";
import { buildAlternates, getBaseUrl } from "~/utils/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata.reviews" });
	const path = "/reviews";
	const canonicalUrl = `${getBaseUrl()}/${locale}${path}`;
	return {
		title: t("title"),
		description: t("description"),
		alternates: buildAlternates(locale, path),
		openGraph: { url: canonicalUrl },
		twitter: { card: "summary_large_image" },
	};
}

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Reviews" });

	const overviewItems: IGalleryItemProps[] = [
		{
			title: "items.titles.reviewAllYourTech",
			description: "items.descriptions.reviewAllYourTech",
			image: "/gallery/logos/reviews/allyourtech.webp",
			tags: ["review"],
			type: "link",
			link: "https://allyourtech.ai/ai-tools/trust-vault",
			category: "categories.reviews",
			date: "2025-09-16",
		},
		{
			title: "items.titles.reviewProductCool",
			description: "items.descriptions.reviewProductCool",
			image: "/gallery/logos/reviews/productcool.svg",
			tags: ["review"],
			type: "link",
			link: "https://www.productcool.com/product/trust-vault",
			category: "categories.reviews",
			date: "2025-09-17",
		},
		{
			title: "items.titles.reviewScoutForge",
			description: "items.descriptions.reviewScoutForge",
			image: "/gallery/logos/reviews/scoutforge.webp",
			tags: ["review"],
			type: "link",
			link: "https://scoutforge.net/apps/trust-vault",
			category: "categories.reviews",
			date: "2025-10-14",
		},
		{
			title: "items.titles.reviewStartUpRanking",
			description: "items.descriptions.reviewStartUpRanking",
			image: "/gallery/logos/reviews/startupranking.webp",
			tags: ["review"],
			type: "link",
			link: "https://www.startupranking.com/startup/trust-vault",
			category: "categories.reviews",
			date: "2025-10-06",
		},
	];

	return (
		<Fragment>
			<LayoutHeader />
			<main>
				<section className="pt-[50px] px-[25px] py-[40px] lg:px-[40px] lg:py-[50px]">
					<h1
						className={cn(
							"px-[25px] font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px] leading-[110%]",
							locale === "ru" ? "text-[40px] leading-[110%]" : "text-[48px] leading-[110%]",
						)}>
						{t("title")}
					</h1>
					<div className="flex items-center justify-center w-[290px] h-[45px] bg-[#DBE9FE] rounded-[10px] mt-[40px] mx-auto">
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#3A73ED] text-center">
							{t("articles")}
						</p>
					</div>
					<div className="mt-[40px] w-full">
						<Gallery items={overviewItems} />
					</div>
				</section>
			</main>
			<LayoutFooter />
		</Fragment>
	);
}
