import { getTranslations } from "next-intl/server";

import { cn } from "~/utils/css";

import { ImgIcon } from "../ImgIcon";

const Capabilities = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
		<section
			className="flex flex-col items-center pb-[40px] lg:py-[50px] bg-[linear-gradient(180deg,_#F0F3FF_0%,_#FFFFFF_100%)]"
			id="capabilities">
			<h2
				className={cn(
					"font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px]",
					locale === "ru" ? "text-[40px]" : "text-[48px]",
				)}>
				{t("capabilities.title")}
			</h2>
			<p
				className={cn(
					"font-semibold tracking-[-0.05em] text-black/70 text-center px-[20px] lg:text-[20px] lg:mt-[40px]",
					locale === "ru" ? "text-[20px] mt-[30px]" : "text-[24px] mt-[40px]",
				)}>
				{t("capabilities.text")}
			</p>
			<div className="flex w-full max-w-[1286px] flex-col gap-[30px] px-[25px] lg:grid lg:[grid-template-columns:repeat(auto-fit,_minmax(380px,_1fr))] lg:gap-x-[48px] lg:gap-y-[40px] mt-[40px]">
				{new Array(6).fill(0).map((_, index) => (
					<div
						key={index}
						className="reveal-on-scroll group flex flex-col gap-[20px] py-[35px] px-[26px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:-translate-y-[4px] lg:hover:shadow-[0_14px_30px_-12px_rgba(58,115,237,0.35)] lg:hover:border-[#BCDBFE]">
						<div className="flex items-center justify-center w-[50px] h-[50px] bg-[#DBE9FE] rounded-[10px] transition-colors duration-300 group-hover:bg-[#3A73ED]">
							<ImgIcon
								icon={t(`capabilities.items.${index + 1}.icon`)}
								color="#3A73ED"
								width={30}
								height={30}
								className="transition-colors duration-300 group-hover:bg-white!"
							/>
						</div>
						<h3 className="font-inter font-semibold text-[24px] tracking-[-0.05em] text-black/80">
							{t(`capabilities.items.${index + 1}.title`)}
						</h3>
						<p
							className={cn(
								"font-inter font-medium tracking-[-0.05em] text-black/70 lg:text-[16px] leading-[110%]",
								locale === "ru" ? "text-[14px] leading-[110%]" : "text-[16px] leading-[110%]",
							)}>
							{t(`capabilities.items.${index + 1}.text`)}
						</p>
					</div>
				))}
			</div>
			<div className="reveal-on-scroll relative isolate overflow-hidden mt-[40px] w-full max-w-[1236px] px-[25px] py-[16px] bg-[linear-gradient(115deg,_#2E5FD4_0%,_#3A73ED_45%,_#5A8CF2_100%)] shadow-[0_20px_50px_-24px_rgba(58,115,237,0.75)] lg:rounded-[10px] lg:py-[30px] before:content-[''] before:absolute before:inset-0 before:-z-10 before:opacity-[0.15] before:[background-image:radial-gradient(circle_at_1px_1px,#FFF_1px,transparent_0)] before:[background-size:22px_22px]">
				<p className="font-inter font-bold text-[24px] lg:text-[32px] tracking-[-0.05em] text-white text-center">
					{t("capabilities.bottom.title")}
				</p>
				<p className="font-inter font-medium text-[14px] lg:text-[16px] tracking-[-0.05em] text-white/90 text-center mt-[15px] lg:mt-[20px] lg:mx-auto lg:max-w-[600px] leading-[110%]">
					{t("capabilities.bottom.text")}
				</p>
				<p className="mt-[15px] lg:mt-[20px] font-inter font-medium text-[10px] lg:text-[14px] tracking-[-0.05em] text-white/80 text-center">
					✓&nbsp; {t("capabilities.bottom.encryption")}&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp;{" "}
					{t("capabilities.bottom.shamir")}&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp;{" "}
					{t("capabilities.bottom.openSource")}
				</p>
			</div>
		</section>
	);
};

export { Capabilities };
