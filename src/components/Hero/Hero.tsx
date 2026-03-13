import { getTranslations } from "next-intl/server";
import Link from "next/link";

import { cn } from "~/utils/css";

import { ButtonBlue } from "../ButtonBlue";
import { ButtonTransparent } from "../ButtonTransparent";
import { ImgIcon } from "../ImgIcon";

const Hero = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
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
					<p className="font-inter font-medium text-[15px] tracking-[-0.05em] text-black/70">Open Source</p>
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
					<p className="font-inter font-medium text-[15px] tracking-[-0.05em] text-black/70">AES-256</p>
				</div>
			</div>
			<div
				className={cn(
					"mt-[35px] grid gap-[10px] lg:gap-[20px]",
					locale === "ru" ? "grid-cols-1 lg:grid-cols-[250px_auto]" : "grid-cols-[250px_auto]",
				)}>
				<Link href="#download" className={cn(locale === "ru" && "w-full lg:w-auto")}>
					<ButtonBlue>
						<div className="flex items-center justify-center gap-[10px]">
							<ImgIcon icon={"circle_down.svg"} color="#FFFFFF" width={20} height={20} />
							{t("hero.download")}
						</div>
					</ButtonBlue>
				</Link>
				<Link href="#capabilities">
					<ButtonTransparent className={cn(locale === "ru" && "w-full lg:w-auto")}>
						{t("hero.learnMore")}
					</ButtonTransparent>
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
	);
};

export { Hero };
