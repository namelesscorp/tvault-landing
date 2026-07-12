import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Fragment } from "react";

import { cn } from "~/utils/css";

import { ButtonBlue } from "../ButtonBlue";
import { ButtonTransparent } from "../ButtonTransparent";
import { HeroBackdrop } from "../HeroBackdrop";
import { ImgIcon } from "../ImgIcon";

const trustBadges = [
	{ icon: "shield.svg", label: "Open Source" },
	{ icon: "key.svg", label: "Shamir’s Secret" },
	{ icon: "lock.svg", label: "AES-256" },
];

const pressLogos = ["AllYourTech", "ProductCool", "Scout Forge", "StartUp Ranking"];

const Hero = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
		<section className="hero-grid relative isolate flex flex-col items-center overflow-hidden pt-[56px] px-[25px] pb-[20px] lg:pt-[80px] lg:px-[50px] lg:pb-[36px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)]">
			<HeroBackdrop />

			<h1
				className={cn(
					"reveal max-w-[860px] font-inter font-extrabold tracking-[-0.05em] text-center text-balance leading-[105%] text-black/85",
					locale === "ru" ? "text-[38px] lg:text-[60px]" : "text-[42px] lg:text-[68px]",
				)}>
				{t("hero.titleTop")}{" "}
				<span className="block lg:inline bg-[linear-gradient(92deg,_#3A73ED_0%,_#7BA4F5_100%)] bg-clip-text text-transparent">
					{t("hero.titleAccent")}
				</span>
			</h1>

			<p
				className={cn(
					"reveal reveal-d1 mt-[28px] max-w-[720px] font-inter font-medium tracking-[-0.04em] text-black/65 text-center text-pretty leading-[145%]",
					locale === "ru" ? "text-[16px] lg:text-[19px]" : "text-[18px] lg:text-[20px]",
				)}>
				{t("hero.subtitle")}
			</p>

			<div className="reveal reveal-d2 grid grid-cols-[90px_110px_90px] gap-[20px] lg:gap-[40px] mt-[38px]">
				{trustBadges.map((badge, index) => (
					<div className="group flex flex-col items-center gap-[8px]" key={badge.label}>
						<div
							className="pulse-ring relative flex items-center justify-center w-[65px] h-[65px] bg-[#DBE9FE] rounded-full transition-all duration-300 group-hover:bg-[#3A73ED] group-hover:-translate-y-[3px] group-hover:shadow-[0_8px_20px_-6px_rgba(58,115,237,0.55)]"
							style={{ animationDelay: `${index * 0.9}s` }}>
							<ImgIcon
								icon={badge.icon}
								color="#3A73ED"
								width={30}
								height={30}
								className="transition-colors duration-300 group-hover:bg-white!"
							/>
						</div>
						<p className="font-inter font-medium text-[15px] tracking-[-0.05em] text-black/70">
							{badge.label}
						</p>
					</div>
				))}
			</div>

			<div
				className={cn(
					"reveal reveal-d3 mt-[38px] grid gap-[10px] lg:gap-[20px]",
					locale === "ru" ? "grid-cols-1 lg:grid-cols-[250px_auto]" : "grid-cols-[250px_auto]",
				)}>
				<Link href="#download" className={cn(locale === "ru" && "w-full lg:w-auto")}>
					<ButtonBlue
						eventName="hero_download"
						className="w-full h-[48px] shadow-[0_10px_24px_-8px_rgba(58,115,237,0.6)] hover:-translate-y-[2px] hover:shadow-[0_14px_30px_-8px_rgba(58,115,237,0.7)]">
						<div className="flex items-center justify-center gap-[10px]">
							<ImgIcon icon={"circle_down.svg"} color="#FFFFFF" width={20} height={20} />
							{t("hero.download")}
						</div>
					</ButtonBlue>
				</Link>
				<Link href="#capabilities">
					<ButtonTransparent
						className={cn("h-[48px] hover:bg-[#3A73ED]/8", locale === "ru" && "w-full lg:w-auto")}
						eventName="learn_more">
						{t("hero.learnMore")}
					</ButtonTransparent>
				</Link>
			</div>

			<p className="reveal reveal-d3 mt-[30px] font-inter font-medium text-[14px] tracking-[-0.04em] text-black/50 text-center">
				✓&nbsp; {t("hero.noSignups")}&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("hero.noServers")}
				&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("hero.noInternet")}
			</p>

			<Link
				href="/reviews"
				className="reveal reveal-d4 group mt-[42px] flex flex-col items-center gap-[14px] rounded-[12px] px-[10px] py-[6px]">
				<p className="font-inter font-semibold text-[11px] uppercase tracking-[0.16em] text-black/35">
					{t("hero.featuredOn")}
				</p>
				<div className="flex flex-wrap items-center justify-center gap-x-[14px] gap-y-[10px] lg:gap-x-[20px]">
					{pressLogos.map((name, index) => (
						<Fragment key={name}>
							{index > 0 && <span className="hidden lg:block w-[4px] h-[4px] rounded-full bg-black/15" />}
							<span className="font-inter font-semibold text-[15px] tracking-[-0.03em] text-black/40 transition-colors duration-300 group-hover:text-black/60">
								{name}
							</span>
						</Fragment>
					))}
				</div>
			</Link>

			<Link href="#capabilities" aria-label={t("hero.learnMore")} className="mt-[30px] lg:mt-[40px]">
				<ImgIcon
					icon="chevron_down.svg"
					color="#3A73ED"
					width={40}
					height={40}
					className="animate-bounce-slow opacity-70 hover:opacity-100"
				/>
			</Link>
		</section>
	);
};

export { Hero };
