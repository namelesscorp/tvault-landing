import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { AboutCards } from "~/components/AboutCards";
import { ButtonBlue } from "~/components/ButtonBlue";
import { ButtonTransparent } from "~/components/ButtonTransparent";
import { Gallery } from "~/components/Gallery";
import { IGalleryItemProps } from "~/components/GalleryItem/GalleryItem.model";
import { ImgIcon } from "~/components/ImgIcon";
import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { Plans } from "~/components/Plans";
import { Roadmap } from "~/components/Roadmap";
import { cn } from "~/utils/css";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "HomePage" });
	const headersList = await headers();
	const userAgent = headersList.get("user-agent") || "";

	const overviewItems: IGalleryItemProps[] = [
		{
			title: "Single Version: Full review",
			description:
				"A detailed video overview of all the features of the application: from installation to advanced security features.",
			image: "/single/1.webp",
			tags: ["overview", "tutorial"],
			type: "video",
			category: "categories.desktop",
		},
		{
			title: "Single Version: Container creation",
			description:
				"A detailed video overview of all the features of the application: from installation to advanced security features.",
			image: "/single/2.webp",
			tags: ["overview", "tutorial"],
			type: "image",
			category: "categories.features",
		},
		{
			title: "Single Version: Container management",
			description:
				"A detailed video overview of all the features of the application: from installation to advanced security features.",
			image: "/single/3.webp",
			tags: ["overview", "tutorial"],
			type: "video",
			category: "categories.features",
		},
	];

	return (
		<Fragment>
			<LayoutHeader />
			<main>
				<section className="flex flex-col items-center pt-[40px] px-[25px] pb-[20px] lg:pt-[65px] lg:px-[50px] lg:pb-[36px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)]">
					<h1 className="font-inter font-extrabold text-[64px] tracking-[-0.05em] text-[#3A73ED] text-center">
						Trust Vault
					</h1>
					<p
						className={cn(
							"mt-[35px] max-w-[720px] font-semibold tracking-[-0.05em] text-black/70 text-center lg:text-[24px]",
							locale === "ru" ? "text-[20px]" : "text-[24px]",
						)}>
						{t("hero.subtitle")}
					</p>
					<p
						className={cn(
							"mt-[35px] max-w-[720px] font-medium tracking-[-0.05em] text-black/70 text-center lg:text-[20px]",
							locale === "ru" ? "text-[16px]" : "text-[20px]",
						)}>
						{t("hero.description")}
					</p>
					<div className="grid grid-cols-[90px_110px_90px] gap-[20px] lg:gap-[40px] mt-[35px]">
						<div className="flex flex-col items-center gap-[8px]">
							<div className="flex items-center justify-center w-[65px] h-[65px] bg-[#DBE9FE] rounded-full">
								<ImgIcon icon={"shield.svg"} color="#3A73ED" width={30} height={30} />
							</div>
							<p className="font-inter font-medium text-[15px] tracking-[-0.05em] text-black/70">
								Open Source
							</p>
						</div>
						<div className="flex flex-col items-center gap-[8px]">
							<div className="flex items-center justify-center w-[65px] h-[65px] bg-[#DBE9FE] rounded-full">
								<ImgIcon icon={"key.svg"} color="#3A73ED" width={30} height={30} />
							</div>
							<p className="font-inter font-medium text-[15px] tracking-[-0.05em] text-black/70">
								Shamir’s Secret
							</p>
						</div>
						<div className="flex flex-col items-center gap-[8px]">
							<div className="flex items-center justify-center w-[65px] h-[65px] bg-[#DBE9FE] rounded-full">
								<ImgIcon icon={"lock.svg"} color="#3A73ED" width={30} height={30} />
							</div>
							<p className="font-inter font-medium text-[15px] tracking-[-0.05em] text-black/70">
								AES-256
							</p>
						</div>
					</div>
					<div className="mt-[35px] grid grid-cols-[250px_auto] gap-[10px] lg:gap-[20px]">
						<Link href="#download">
							<ButtonBlue>
								<div className="flex items-center justify-center gap-[10px]">
									<ImgIcon icon={"circle_down.svg"} color="#FFFFFF" width={20} height={20} />
									{t("hero.download")}
								</div>
							</ButtonBlue>
						</Link>
						<Link href="#about">
							<ButtonTransparent>{t("hero.learnMore")}</ButtonTransparent>
						</Link>
					</div>
					<p className="mt-[35px] font-inter font-medium text-[14px] tracking-[-0.05em] text-black/50 text-center">
						✓&nbsp; {t("hero.noSignups")}&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("hero.noServers")}
						&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("hero.noInternet")}
					</p>
					<ImgIcon
						icon="chevron_down.svg"
						color="#3A73ED"
						width={40}
						height={40}
						className="mt-[35px] lg:mt-[50px]"
					/>
				</section>
				<section className="flex flex-col items-center pb-[40px] lg:py-[50px] bg-[linear-gradient(180deg,_#F0F3FF_0%,_#FFFFFF_100%)]">
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
								className="flex flex-col gap-[20px] py-[35px] px-[26px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
								<div className="flex items-center justify-center w-[50px] h-[50px] bg-[#DBE9FE] rounded-[10px]">
									<ImgIcon
										icon={t(`capabilities.items.${index + 1}.icon`)}
										color="#3A73ED"
										width={30}
										height={30}
									/>
								</div>
								<p className="font-inter font-semibold text-[24px] tracking-[-0.05em] text-black/80">
									{t(`capabilities.items.${index + 1}.title`)}
								</p>
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
					<div className="mt-[40px] w-full max-w-[1236px] px-[25px] py-[16px] bg-[#3A73ED] lg:rounded-[10px] lg:py-[30px]">
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
				<section className="flex flex-col items-center pt-[35px] px-[25px] pb-[80px] lg:py-[50px] bg-[linear-gradient(180deg,_#F0F3FF_0%,_#FFFFFF_100%)]">
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
						<Gallery items={overviewItems} />
					</div>
				</section>
				<section className="flex flex-col items-center py-[40px] px-[25px] lg:py-[50px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)]">
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
				<section className="flex flex-col items-center py-[40px] px-[25px] lg:py-[50px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)]">
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
							<ButtonBlue className="w-[230px]">{t("versions.downloadNow")}</ButtonBlue>
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
									{t("versions.available")}
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
							<ButtonTransparent className="w-[230px]">{t("versions.getNotified")}</ButtonTransparent>
						</div>
						<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
							<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
								<ImgIcon icon="monitor.svg" color="#3A73ED" width={50} height={50} />
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
							<ButtonTransparent className="w-[230px]">{t("versions.getNotified")}</ButtonTransparent>
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
				<Roadmap locale={locale} />
				<section className="relative min-h-[100vh] w-full px-[25px] pt-[90px] pb-[50px] lg:px-[40px] lg:pt-[110px] lg:pb-[90px] flex flex-col">
					<Image
						src="/bg.webp"
						fill
						alt="bg"
						className="object-cover"
						quality={95}
						style={{ scale: "1 -1" }}
					/>
					<h1 className="relative z-1 max-w-[1020px] font-nunito-sans font-black text-[48px] lg:text-[73px] leading-[109%] tracking-[-0.02em] uppercase text-white">
						{t("main.title")}
					</h1>
					<p className="relative z-1 max-w-[840px] font-inter pt-[18px] lg:pt-[24px] font-medium text-[22px] leading-[134%] tracking-[-0.007em] text-white">
						{t("main.text")}
					</p>
					{/* <div className="relative z-1 pt-[18px] lg:pt-[24px]">
						<a
							href="https://www.producthunt.com/products/trust-vault-secure-data-storage?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-trust&#0045;vault&#0045;secure&#0045;data&#0045;storage"
							target="_blank">
							<img
								src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1011068&theme=dark&t=1756639117134"
								alt="Trust&#0032;Vault&#0032;—&#0032;Secure&#0032;Data&#0032;Storage - Encrypt&#0032;and&#0032;decrypt&#0032;files&#0032;in&#0032;secure&#0032;containers | Product Hunt"
								width="250"
								height="54"
							/>
						</a>
					</div> */}

					<div className="relative z-1 flex flex-col lg:grid lg:grid-cols-2 gap-[20px] mt-[18px] lg:mt-auto">
						<div className="px-[20px] py-[30px] lg:px-[40px] lg:py-[30px] rounded-[12px] bg-[rgba(210,210,210,0.1)] backdrop-blur-[40px]">
							<h2 className="font-inter font-bold text-[24px] leading-[122.6%] text-white">
								{t("main.download.title")}
							</h2>
							<p className="mt-[16px] lg:mt-[20px] max-w-[450px] h-[42px] lg:h-[58px] font-inter font-medium text-[16px] lg:text-[20px] leading-[134%] tracking-[0.007em] text-white">
								{t("main.download.text")}
							</p>
							<a
								href="#download"
								className="mt-[20px] lg:mt-[30px] flex items-center justify-center w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] rounded-full bg-white cursor-pointer hover:bg-white/80 transition-all duration-300">
								<Image
									src="/icons/arrow_right.svg"
									alt="arrow_right"
									width={32}
									height={11}
									className="pointer-events-none"
								/>
							</a>
						</div>
						<div className="px-[20px] py-[30px] lg:px-[40px] lg:py-[30px] rounded-[12px] bg-[rgba(210,210,210,0.1)] backdrop-blur-[40px]">
							<h2 className="font-inter font-bold text-[24px] leading-[122.6%] text-white">
								{t("main.roadmap.title")}
							</h2>
							<p className="mt-[16px] lg:mt-[20px] max-w-[400px] h-[42px] lg:h-[58px] font-inter font-medium text-[16px] lg:text-[20px] leading-[134%] tracking-[0.007em] text-white">
								{t("main.roadmap.text")}
							</p>
							<a
								href="#plans"
								className="mt-[20px] lg:mt-[30px] flex items-center justify-center w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] rounded-full bg-white cursor-pointer hover:bg-white/80 transition-all duration-300">
								<Image
									src="/icons/arrow_right.svg"
									alt="arrow_right"
									width={32}
									height={11}
									className="pointer-events-none"
								/>
							</a>
						</div>
					</div>
				</section>
				<section className="pt-[50px] px-[20px] lg:pt-[120px] lg:px-[40px]" id="about">
					<h2 className="font-nunito-sans font-black text-[36px] lg:text-[60px] leading-[109%] tracking-[-0.02em] uppercase text-[#141414]">
						{t("about.title")}
					</h2>
					<p className="lg:max-w-[1000px] mt-[48px] lg:mt-[85px] font-inter font-medium text-[18px] lg:text-[26px] leading-[128.6%] text-[#141414]">
						{t("about.text")}
					</p>
					<div className="mt-[48px]">
						<AboutCards />
					</div>
					<h3 className="mt-[48px] lg:mt-[70px] font-nunito-sans font-black text-[28px] lg:text-[48px] leading-[109%] tracking-[-0.02em] uppercase text-[#5D5B5B]">
						{t("about.for.title")}
					</h3>
					<ul className="mt-[48px] lg:mt-[80px] font-inter font-medium text-[16px] lg:text-[26px] leading-[128.6%] text-[#141414] opacity-60 list-disc list-inside">
						{new Array(4).fill(0).map((_, index) => (
							<li key={index}>{t(`about.for.${index + 1}`)}</li>
						))}
					</ul>
					<div className="hidden lg:flex lg:flex-col lg:gap-[2px] mt-[80px] font-nunito-sans text-[60px] font-black leading-[109%] tracking-[-0.02em] uppercase text-[#FFFFFF]">
						<div className="flex">
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.1")}
							</div>
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.2")}
							</div>
						</div>
						<div className="flex">
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.3")}
							</div>
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.4")}
							</div>
						</div>
						<div className="flex">
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.5")}
							</div>
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.6")}
							</div>
						</div>
					</div>
				</section>
				{/* <section className="mt-[48px] lg:mt-[80px] px-[20px] lg:px-[40px]" id="versions">
					<h2 className="font-nunito-sans font-black text-[36px] lg:text-[48px] leading-[109%] tracking-[-0.02em] uppercase text-[#141414]">
						{t("versions.title")}
					</h2>
					<div className="mt-[48px] lg:mt-[80px]">
						<div className="flex flex-col lg:grid gap-[48px] lg:items-start lg:[grid-template-columns:1fr_5px_1fr_5px_1fr]">
							<div className="flex flex-col gap-[20px]">
								<p className="font-nunito-sans font-black text-[26px] leading-[122%] uppercase text-[#141414]">
									{t("versions.single.title")}
								</p>
								<p className="lg:h-[240px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] opacity-80">
									{t("versions.single.text")}
								</p>
							</div>
							<div className="hidden lg:block w-[5px] h-[150px] bg-[#EBF1FA] mt-[30px]" />
							<div className="flex flex-col gap-[20px]">
								<p className="font-nunito-sans font-black text-[26px] leading-[122%] uppercase text-[#141414]">
									{t("versions.enterprise.title")}
								</p>
								<p className="lg:h-[240px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] opacity-80">
									{t("versions.enterprise.text")}
								</p>
							</div>
							<div className="hidden lg:block w-[5px] h-[150px] bg-[#EBF1FA] mt-[30px]" />
							<div className="flex flex-col gap-[20px]">
								<p className="font-nunito-sans font-black text-[26px] leading-[122%] uppercase text-[#141414]">
									{t("versions.cloud.title")}
								</p>
								<p className="lg:h-[240px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] opacity-80">
									{t("versions.cloud.text")}
								</p>
							</div>
						</div>
					</div>
					<h3
						className="mt-[48px] lg:mt-[15px] font-nunito-sans font-black text-[48px] leading-[109%] tracking-[-0.02em] uppercase text-[#5D5B5B]"
						id="download">
						{t("single.title")}
					</h3>
					<p className="mt-[48px] lg:mt-[80px] font-inter font-medium text-[16px] lg:text-[26px] leading-[128%] text-[#5D5B5B]">
						<span className="font-black">{t("single.text.1")}</span>
						<br />
						{t("single.text.2")}
					</p>
					<DownloadLinks
						title1={t("single.text.3")}
						title2={t("single.text.4")}
						title3={t("single.text.5")}
						titleButton={t("single.download")}
						userAgent={userAgent}
					/>
					<div className="hidden lg:block mt-[32px]">
						<SingleVersionSlider />
					</div>
				</section> */}
				<section className="mt-[48px] lg:mt-[80px] px-[20px] lg:px-[40px] pb-[100px] lg:pb-[65px]" id="plans">
					<h2 className="font-nunito-sans font-black text-[36px] lg:text-[60px] leading-[109%] tracking-[-0.02em] uppercase text-[#141414]">
						{t("plans.title")}
					</h2>
					<p className="mt-[48px] lg:mt-[80px] font-inter font-medium text-[18px] lg:text-[26px] leading-[128%] text-[#141414]">
						{t("plans.text")}
					</p>
					<div className="mt-[30px] lg:mt-[80px]">
						<Plans />
					</div>
				</section>
			</main>
			<LayoutFooter />
		</Fragment>
	);
}
