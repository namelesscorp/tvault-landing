"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Fragment } from "react";

import { track } from "~/utils/track";

import { HomeAnchorLink } from "../HomeAnchorLink";
import { bottomLinks, links, linksCategories } from "../Links";

const languages = [
	{ code: "en", name: "EN" },
	{ code: "ru", name: "RU" },
];

const LayoutFooter = () => {
	const t = useTranslations("HomePage.footer");
	const tHeader = useTranslations("HomePage.header");
	const tAlt = useTranslations("alt");
	const params = useParams();
	const pathname = usePathname();
	const currentLocale = params.locale as string;
	const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

	return (
		<footer className="px-[20px] lg:px-[50px] py-[20px] bg-[#101827] flex flex-col gap-[20px] lg:gap-[50px]">
			<div className="flex flex-col gap-[30px] lg:gap-[0px] lg:flex-row justify-between lg:px-[30px]">
				<div className="flex flex-col gap-[12px] lg:gap-[20px] lg:max-w-[430px]">
					<div className="flex items-center gap-[15px]">
						<Image src="/logo.svg" alt={tAlt("logo")} width={60} height={60} className="rounded-[10px]" />
						<p className="font-inter font-extrabold text-white tracking-[-0.05em] text-[24px]">
							Trust Vault
						</p>
					</div>
					<p className="font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70">
						{t("text")}
					</p>
					<a
						href="mailto:support@tvault.app"
						className="font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70">
						support@tvault.app
					</a>
					<p className="font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70 flex items-center gap-1">
						{languages.map((language, index) => (
							<Fragment key={language.code}>
								{index > 0 && " / "}
								<Link
									href={`/${language.code}${pathWithoutLocale}`}
									className={
										language.code === currentLocale
											? "text-white"
											: "text-white/70 hover:text-white transition-colors duration-200"
									}>
									{language.name}
								</Link>
							</Fragment>
						))}
					</p>
				</div>
				{linksCategories.map((category, index) => (
					<div key={category} className="flex flex-col gap-[14px] lg:gap-[35px]">
						<p className="font-inter font-extrabold text-[24px] tracking-[-0.05em] text-white">
							{tHeader(`links.${category}.title`)}
						</p>
						<div className="flex flex-col gap-[8px] lg:gap-[15px]">
							{links[index].map(link =>
								link.href.startsWith("#") ? (
									<HomeAnchorLink
										key={link.titleKey}
										href={link.href}
										className="font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70">
										{tHeader(`links.${category}.${link.titleKey}`)}
									</HomeAnchorLink>
								) : (
									<Link
										key={link.titleKey}
										href={link.href}
										className="font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70"
										{...(category === "socials"
											? {
													onClick: () =>
														track("social_click", {
															platform: link.titleKey,
															location: "footer",
														}),
												}
											: {})}>
										{tHeader(`links.${category}.${link.titleKey}`)}
									</Link>
								),
							)}
						</div>
					</div>
				))}
			</div>
			<div className="w-full h-[1px] bg-white/20"></div>
			<div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[0px] lg:justify-between lg:items-center">
				<div className="flex lg:flex-row gap-[40px] items-center">
					<Image src="/nameless_logo.svg" alt={tAlt("namelessLogo")} width={98} height={65} />
					<p className="hidden lg:block font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70">
						© 2026 Trust Vault. {t("copyright")}
					</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[15px] lg:items-center">
					{bottomLinks.map(link => (
						<Link
							key={link.titleKey}
							href={link.href}
							className="font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70">
							{t(`links.bottom.${link.titleKey}`)}
						</Link>
					))}
				</div>
				<p className="block lg:hidden font-inter font-medium text-[16px] lg:text-[20px] tracking-[-0.05em] text-white/70">
					© 2026 Trust Vault. {t("copyright")}
				</p>
			</div>
		</footer>
	);
};

export { LayoutFooter };
