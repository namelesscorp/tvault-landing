import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { HomeAnchorLink } from "../HomeAnchorLink";
import { links } from "../Links";
import { MobileMenu } from "../MobileMenu";
import { SelectResources } from "../SelectResources";

const LayoutHeader = () => {
	const t = useTranslations("HomePage.header");
	const tAlt = useTranslations("alt");

	return (
		<header className="sticky top-0 w-full z-50 px-[20px] py-[22px] lg:px-[50px] flex justify-between items-center bg-[#F5F7FF]/80 backdrop-blur-md border-b border-[#E5E6EA]/60 supports-[backdrop-filter]:bg-[#F5F7FF]/65">
			<Link href="/" className="flex items-center gap-[15px] transition-opacity duration-300 hover:opacity-80">
				<Image src="/logo.svg" alt={tAlt("logo")} width={60} height={60} className="rounded-[10px]" />
				<p className="font-inter font-extrabold text-[32px] tracking-[-0.05em] text-black">Trust Vault</p>
			</Link>
			<div className="block lg:hidden">
				<MobileMenu />
			</div>
			<div className="hidden lg:flex gap-[20px] items-center">
				{links[0]
					.filter(link => link.titleKey !== "download")
					.map(link =>
						link.href.startsWith("#") ? (
							<HomeAnchorLink
								key={link.titleKey}
								href={link.href}
								className="font-inter font-medium text-[20px] tracking-[-0.04em] text-black/70 transition-colors duration-300 hover:text-[#3A73ED]">
								{t(`links.navigation.${link.titleKey}`)}
							</HomeAnchorLink>
						) : (
							<Link
								key={link.titleKey}
								href={link.href}
								className="font-inter font-medium text-[20px] tracking-[-0.04em] text-black/70 transition-colors duration-300 hover:text-[#3A73ED]">
								{t(`links.navigation.${link.titleKey}`)}
							</Link>
						),
					)}
				<SelectResources />
				<HomeAnchorLink href="#download" className="cursor-pointer">
					<div className="flex items-center justify-center px-[20px] h-[44px] bg-[#3A73ED] rounded-[14px] hover:bg-[#3A73ED]/90 transition-all duration-300">
						<p className="font-inter font-medium text-[20px] tracking-[-0.05em] text-[#FFFFFF] leading-[100%]">
							{t("download")}
						</p>
					</div>
				</HomeAnchorLink>
			</div>
		</header>
	);
};

export { LayoutHeader };
