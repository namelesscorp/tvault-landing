import { getTranslations } from "next-intl/server";

import { cn } from "~/utils/css";

import { ImgIcon } from "../ImgIcon";

const WhoIs = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
		<section
			className="flex flex-col items-center py-[40px] px-[25px] lg:py-[50px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)]"
			id="features">
			<h2
				className={cn(
					"font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px] leading-[110%]",
					locale === "ru" ? "text-[40px] leading-[110%]" : "text-[48px] leading-[110%]",
				)}>
				{t("whoIs.title")}
			</h2>
			<p
				className={cn(
					"font-semibold tracking-[-0.05em] text-black/70 text-center px-[20px] lg:text-[24px] mt-[40px] leading-[110%]",
					locale === "ru" ? "text-[20px] leading-[110%]" : "text-[24px] leading-[110%]",
				)}>
				{t("whoIs.text")}
			</p>
			<div className="flex w-full max-w-[1236px] flex-col gap-[30px] lg:grid lg:[grid-template-columns:repeat(auto-fit,_minmax(380px,_1fr))] lg:gap-x-[48px] lg:gap-y-[40px] mt-[40px]">
				{new Array(6).fill(0).map((_, index) => (
					<div
						key={index}
						className="py-[32px] px-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
						<p
							className={cn(
								"font-inter font-semibold text-[24px] tracking-[-0.05em] text-black/80 lg:text-[24px] leading-[110%]",
								locale === "ru" ? "text-[22px] leading-[110%]" : "text-[24px] leading-[110%]",
							)}>
							{t(`whoIs.items.${index + 1}.title`)}
						</p>
						<p
							className={cn(
								"font-inter font-medium text-[16px] tracking-[-0.05em] text-black/70 lg:text-[16px] leading-[110%] mt-[20px]",
								locale === "ru" ? "text-[14px] leading-[110%]" : "text-[16px] leading-[110%]",
							)}>
							{t(`whoIs.items.${index + 1}.text`)}
						</p>
						<div className="flex items-center gap-[5px] mt-[40px]">
							<ImgIcon icon="check_circle.svg" color="#17A34A" width={20} height={20} />
							<p className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/80 leading-[110%]">
								{t(`whoIs.benefits`)}
							</p>
						</div>
						<div className="flex flex-col gap-[20px] mt-[20px]">
							{new Array(4).fill(0).map((_, index) => (
								<div key={index} className="flex items-center gap-[5px]">
									<ImgIcon icon="arrow_right_2.svg" color="#2663EB" width={20} height={20} />
									<p
										className={cn(
											"font-inter font-medium tracking-[-0.05em] text-black/70",
											locale === "ru"
												? "text-[15px] leading-[110%]"
												: "text-[16px] leading-[110%]",
										)}>
										{t(`whoIs.items.${index + 1}.benefits.${index + 1}`)}
									</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export { WhoIs };
