import { getTranslations } from "next-intl/server";
import Link from "next/link";

import { cn } from "~/utils/css";
import { extractDownloadLinks } from "~/utils/downloads";
import { getAppVersion } from "~/utils/version";

import { ButtonBlue } from "../ButtonBlue";
import { ButtonTransparent } from "../ButtonTransparent";
import { DownloadLinkClient } from "../DownloadLinkClient";
import { ImgIcon } from "../ImgIcon";
import { MacDownloadButtonClient } from "../MacDownloadButtonClient";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const fallback = "https://github.com/namelesscorp/tvault/releases";

const Download = async ({ locale, userAgent }: { locale: string; userAgent: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	const version = await getAppVersion();

	const release = await fetch(`${BASE_URL}/api/release`)
		.then(res => res.json())
		.then(data => extractDownloadLinks(data));

	const windows64 = release.windows64 || fallback;
	const windows32 = release.windows32 || fallback;
	const macArm = release.macArm || fallback;
	const macIntel = release.macIntel || fallback;
	const linux = release.linux || fallback;

	const is64BitWindows = userAgent.includes("WOW64") || userAgent.includes("Win64") || userAgent.includes("x64");
	const windowsLink = !is64BitWindows ? windows32 : windows64;

	const isAppleSilicon = /Apple\\s*M\\d/i.test(userAgent) || userAgent.includes("arm64");
	const macLink = isAppleSilicon ? macArm : macIntel;

	const platformLinks = [windowsLink, macLink, linux];

	return (
		<section
			className="flex flex-col items-center pt-[70px] pb-[40px] lg:py-[50px] bg-[linear-gradient(180deg,_#F0F3FF_100%,_#ffffff_100%)]"
			id="download">
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
						{version}
					</p>
					<Link href={platformLinks[0]} target="_blank" className="w-[230px]">
						<ButtonBlue className="w-full">{t("download.windows.download")}</ButtonBlue>
					</Link>
				</div>
				<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="apple.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 text-center">
						{t("download.macos.title")}
					</p>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 text-center">
						{version}
					</p>
					<div className="w-[230px]">
						<MacDownloadButtonClient
							macArm={macArm}
							macIntel={macIntel}
							title={t("download.macos.download")}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center gap-[20px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] transition-all duration-300 lg:hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] lg:hover:border-[#BCDBFE]">
					<div className="flex items-center justify-center w-[80px] h-[80px] bg-[#DBE9FE] rounded-full">
						<ImgIcon icon="linux.svg" color="#3A73ED" width={50} height={50} />
					</div>
					<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80 text-center">
						{t("download.linux.title")}
					</p>
					<p className="font-inter font-regular text-[16px] tracking-[-0.05em] text-black/70 text-center">
						{version}
					</p>
					<Link href={platformLinks[2]} target="_blank" className="w-[230px]">
						<ButtonBlue className="w-full">{t("download.linux.download")}</ButtonBlue>
					</Link>
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
							<li className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70">
								{t("download.downloadByPlatform.items.1.platform")}:{" "}
								<span className="font-bold">
									<DownloadLinkClient
										className="no-underline"
										link={macIntel}
										title={t("download.downloadByPlatform.items.1.intel")}
									/>{" "}
									/{" "}
									<DownloadLinkClient
										className="no-underline"
										link={macArm}
										title={t("download.downloadByPlatform.items.1.appleSilicon")}
									/>
								</span>
							</li>
							<li className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70">
								{t("download.downloadByPlatform.items.2.platform")}:{" "}
								<span className="font-bold">
									<DownloadLinkClient
										className="no-underline"
										link={windows64}
										title={t("download.downloadByPlatform.items.2.x64")}
									/>{" "}
									/{" "}
									<DownloadLinkClient
										className="no-underline"
										link={windows32}
										title={t("download.downloadByPlatform.items.2.x86")}
									/>
								</span>
							</li>
							<li className="font-inter font-semibold text-[16px] tracking-[-0.05em] text-black/70">
								{t("download.downloadByPlatform.items.3.platform")}:{" "}
								<span className="font-bold">
									<DownloadLinkClient
										className="no-underline"
										link={linux}
										title={t("download.downloadByPlatform.items.3.appImage")}
									/>
								</span>
							</li>
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
				<Link href="https://github.com/namelesscorp/tvault" target="_blank">
					<ButtonTransparent>{t("download.viewOnGitHub")}</ButtonTransparent>
				</Link>
			</div>
		</section>
	);
};

export { Download };
