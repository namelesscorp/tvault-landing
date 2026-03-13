import { getTranslations } from "next-intl/server";
import { Fragment } from "react";

import { Gallery } from "~/components/Gallery";
import { IGalleryItemProps } from "~/components/GalleryItem/GalleryItem.model";
import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { cn } from "~/utils/css";

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "Reviews" });

	const overviewItems: IGalleryItemProps[] = [
		{
			title: "Review 1",
			description:
				"A detailed video overview of all the features of the application: from installation to advanced security features.",
			image: "/single/1.webp",
			tags: ["overview", "tutorial"],
			type: "link",
			category: "categories.reviews",
		},
		{
			title: "Review 2",
			description:
				"A detailed video overview of all the features of the application: from installation to advanced security features.",
			image: "/single/2.webp",
			tags: ["overview", "tutorial"],
			type: "link",
			category: "categories.reviews",
		},
		{
			title: "Review 3",
			description:
				"A detailed video overview of all the features of the application: from installation to advanced security features.",
			image: "/single/2.webp",
			tags: ["overview", "tutorial"],
			type: "link",
			category: "categories.reviews",
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
