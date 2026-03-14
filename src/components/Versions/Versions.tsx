import { getTranslations } from "next-intl/server";

import { cn } from "~/utils/css";

import { ButtonBlue } from "../ButtonBlue";
import { ImgIcon } from "../ImgIcon";
import { SubscribeModalWrapper } from "../SubscribeModalWrapper";
import Link from "next/link";

const Versions = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
		<section
			className="flex flex-col items-center py-[40px] px-[25px] lg:py-[50px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)]"
			id="versions">
			<h2
				className={cn(
					"font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px] leading-[110%]",
					locale === "ru" ? "text-[40px] leading-[110%]" : "text-[48px] leading-[110%]",
				)}>
				{t("versions.title")}
			</h2>
			<p
				className={cn(
					"font-semibold tracking-[-0.05em] text-black/70 text-center px-[20px] lg:text-[24px] mt-[40px] leading-[110%]",
					locale === "ru" ? "text-[20px] leading-[110%]" : "text-[24px] leading-[110%]",
				)}>
				{t("versions.text")}
			</p>
			<div className="flex w-full max-w-[1330px] flex-col gap-[30px] lg:grid lg:gap-[40px] lg:[grid-template-columns:repeat(auto-fit,_minmax(380px,_1fr))] mt-[40px]">
				<div className="relative flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#3A73ED] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)]">
					<div className="absolute top-[-15px] left-[50%] translate-x-[-50%] flex items-center justify-center w-[160px] h-[30px] bg-[#3A73ED] rounded-full">
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#FFFFFF] text-center">
							{t("versions.recommended")}
						</p>
					</div>
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="monitor.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 lg:text-[24px] leading-[110%]">
						{t("versions.personal.title")}
					</p>
					<div className="flex items-center justify-center w-[160px] h-[30px] bg-[#DCFCE8] rounded-[10px]">
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#156634] text-center">
							{t("versions.available")}
						</p>
					</div>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 lg:text-[16px] leading-[110%]">
						{t("versions.personal.text")}
					</p>
					<div className="flex flex-col gap-[10px]">
						{new Array(6).fill(0).map((_, index) => (
							<div key={index} className="flex items-center gap-[10px]">
								<ImgIcon icon="check.svg" color="#22C55F" width={24} height={24} />
								<p className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70 leading-[110%]">
									{t(`versions.personal.items.${index + 1}`)}
								</p>
							</div>
						))}
					</div>
					<Link href={"#download"}>
						<ButtonBlue className="w-[230px]" eventName="versions_personal_download">
							{t("versions.downloadNow")}
						</ButtonBlue>
					</Link>
				</div>
				<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="building.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 lg:text-[24px] leading-[110%]">
						{t("versions.enterprise.title")}
					</p>
					<div className="flex items-center justify-center w-[160px] h-[30px] bg-[#DBE9FE] rounded-[10px]">
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#3A73ED] text-center">
							{t("versions.comingSoon")}
						</p>
					</div>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 lg:text-[16px] leading-[110%]">
						{t("versions.enterprise.text")}
					</p>
					<div className="flex flex-col gap-[10px]">
						{new Array(6).fill(0).map((_, index) => (
							<div key={index} className="flex items-center gap-[10px]">
								<ImgIcon icon="check.svg" color="#22C55F" width={24} height={24} />
								<p className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70 leading-[110%]">
									{t(`versions.enterprise.items.${index + 1}`)}
								</p>
							</div>
						))}
					</div>
					<SubscribeModalWrapper
						buttonText={t("versions.getNotified")}
						className="w-[230px]"
						eventName="versions_enterprise_get_notified"
					/>
				</div>
				<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="cloud.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 lg:text-[24px] leading-[110%]">
						{t("versions.cloud.title")}
					</p>
					<div className="flex items-center justify-center w-[160px] h-[30px] bg-[#DBE9FE] rounded-[10px]">
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#3A73ED] text-center">
							{t("versions.comingSoon")}
						</p>
					</div>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 lg:text-[16px] leading-[110%]">
						{t("versions.cloud.text")}
					</p>
					<div className="flex flex-col gap-[10px]">
						{new Array(6).fill(0).map((_, index) => (
							<div key={index} className="flex items-center gap-[10px]">
								<ImgIcon icon="check.svg" color="#22C55F" width={24} height={24} />
								<p className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70 leading-[110%]">
									{t(`versions.cloud.items.${index + 1}`)}
								</p>
							</div>
						))}
					</div>
					<SubscribeModalWrapper
						buttonText={t("versions.getNotified")}
						className="w-[230px]"
						eventName="versions_cloud_get_notified"
					/>
				</div>
			</div>
			<p className="font-inter font-medium text-[20px] tracking-[-0.05em] text-black/70 text-center mt-[40px] leading-[110%]">
				{t("versions.bottomText")}
			</p>
			<p className="mt-[25px] font-inter font-medium text-[14px] tracking-[-0.05em] text-black/50 text-center">
				✓&nbsp; {t("versions.openSource")}&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("versions.crossPlatform")}
				&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("versions.regularUpdates")}
			</p>
		</section>
	);
};

export { Versions };
