import { getTranslations } from "next-intl/server";

import { cn } from "~/utils/css";

import { Gallery } from "../Gallery";
import { IGalleryItemProps } from "../GalleryItem/GalleryItem.model";
import { OVERVIEW_ITEMS } from "./Overview.model";

const Overview = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
		<section
			className="flex flex-col items-center pt-[35px] px-[25px] pb-[80px] lg:py-[50px] bg-[linear-gradient(180deg,_#F0F3FF_0%,_#FFFFFF_100%)]"
			id="overview">
			<h2
				className={cn(
					"font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px] leading-[110%]",
					locale === "ru" ? "text-[40px] leading-[110%]" : "text-[48px] leading-[110%]",
				)}>
				{t("overview.title")}
			</h2>
			<div className="flex items-center justify-center w-[290px] h-[45px] bg-[#DBE9FE] rounded-[10px] mt-[40px] mx-auto">
				<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#3A73ED] text-center">
					{t("overview.galleryTitle")}
				</p>
			</div>
			<p
				className={cn(
					"font-inter font-semibold tracking-[-0.05em] text-black/70 text-center px-[20px] lg:text-[24px] mt-[40px] leading-[110%]",
					locale === "ru" ? "text-[20px] leading-[110%]" : "text-[24px] leading-[110%]",
				)}>
				{t("overview.text")}
			</p>
			<div className="mt-[40px] w-full">
				<Gallery items={OVERVIEW_ITEMS} />
			</div>
		</section>
	);
};

export { Overview };
