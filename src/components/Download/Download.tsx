import { getTranslations } from "next-intl/server";

import { cn } from "~/utils/css";

import { ButtonBlue } from "../ButtonBlue";
import { ButtonTransparent } from "../ButtonTransparent";
import { ImgIcon } from "../ImgIcon";

const Download = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
		<section className="flex flex-col items-center pt-[70px] pb-[40px] lg:py-[50px] bg-[linear-gradient(180deg,_#F0F3FF_100%,_#ffffff_100%)]">
			<h2
				className={cn(
					"px-[25px] font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px] leading-[110%]",
					locale === "ru" ? "text-[40px] leading-[110%]" : "text-[48px] leading-[110%]",
				)}>
				{t("download.title")}
			</h2>
			<p
				className={cn(
					"px-[25px] font-semibold tracking-[-0.05em] text-black/70 text-center lg:text-[24px] mt-[40px] leading-[110%]",
					locale === "ru" ? "text-[20px] leading-[110%]" : "text-[24px] leading-[110%]",
				)}>
				{t("download.text")}
			</p>
			<div className="mx-[25px] px-[11px] py-[13px] bg-[#DBE9FE] rounded-[10px] mt-[40px]">
				<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#3A73ED] text-center">
					{t("download.badge")}
				</p>
			</div>
			<div className="flex w-full max-w-[1338px] flex-col gap-[30px] px-[25px] lg:grid lg:gap-[40px] lg:[grid-template-columns:repeat(auto-fit,_minmax(380px,_1fr))] mt-[40px]">
				<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="windows.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 text-center">
						{t("download.windows.title")}
					</p>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 text-center">
						{t("download.windows.info")}
					</p>
					<ButtonBlue className="w-[230px]">{t("download.windows.download")}</ButtonBlue>
				</div>
				<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="apple.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 text-center">
						{t("download.macos.title")}
					</p>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 text-center">
						{t("download.macos.info")}
					</p>
					<ButtonBlue className="w-[230px]">{t("download.macos.download")}</ButtonBlue>
				</div>
				<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="linux.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 text-center">
						{t("download.linux.title")}
					</p>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 text-center">
						{t("download.linux.info")}
					</p>
					<ButtonBlue className="w-[230px]">{t("download.linux.download")}</ButtonBlue>
				</div>
			</div>
			<div className="w-full max-w-[1288px] mt-[40px] bg-white/80 xl:border-2 xl:border-[#E6E7EB] xl:rounded-[10px] pt-[46px] pb-[40px] xl:p-[30px]">
				<div className="flex flex-col gap-[40px] xl:flex-row xl:gap-[240px] mx-auto xl:m-0 items-start w-fit xl:w-full">
					<div className="flex flex-col gap-[15px]">
						<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80">
							{t("download.installationNotes.title")}
						</p>
						<ul className="flex flex-col gap-[10px] list-disc pl-[24px]">
							{new Array(5).fill(0).map((_, index) => (
								<li
									key={index}
									className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70">
									{t(`download.installationNotes.items.${index + 1}`)}
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col gap-[15px]">
						<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80">
							{t("download.downloadByPlatform.title")}
						</p>
						<ul className="flex flex-col gap-[10px] list-disc pl-[24px]">
							{new Array(3).fill(0).map((_, index) => (
								<li
									key={index}
									className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70">
									{t(`download.downloadByPlatform.items.${index + 1}.platform`)}:{" "}
									<span className="font-bold">
										{t(`download.downloadByPlatform.items.${index + 1}.data`)}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex flex-col gap-[15px] mt-[40px] xl:rounded-[10px] bg-[#3A73ED] p-[30px]">
					<p className="font-inter font-semibold text-[24px] tracking-[-0.05em] text-white">
						{t("download.security.title")}
					</p>
					<p className="font-inter font-medium text-[20px] tracking-[-0.05em] text-white/90">
						{t("download.security.text")}
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-[16px] mt-[40px] px-[25px] text-center">
				<p className="font-inter font-medium text-[20px] tracking-[-0.05em] text-black/70">
					{t("download.openSource")}
				</p>
				<ButtonTransparent>{t("download.viewOnGitHub")}</ButtonTransparent>
			</div>
		</section>
	);
};

export { Download };
