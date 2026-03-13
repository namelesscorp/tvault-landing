import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { links } from "../Links";
import { MobileMenu } from "../MobileMenu";
import { SelectLanguage } from "../SelectLanguage";

const LayoutHeader = () => {
	const t = useTranslations("HomePage.header");

	return (
		<header className="w-full z-10 px-[20px] py-[22px] lg:px-[50px] flex justify-between items-center bg-[#F5F7FF]/50 border-b border-[#E5E6EA]/60">
			<Link href="/" className="flex items-center gap-[15px]">
				<Image src="/logo.svg" alt="logo" width={60} height={60} className="rounded-[10px]" />
				<p className="font-inter font-extrabold text-[32px] tracking-[-0.05em] text-black">Trust Vault</p>
			</Link>
			<div className="block lg:hidden">
				<MobileMenu />
			</div>
			<div className="hidden lg:flex gap-[20px] items-center">
				{links[0]
					.filter(link => link.titleKey !== "download")
					.map(link => (
						<Link
							key={link.titleKey}
							href={link.href}
							className="font-inter font-medium text-[20px] tracking-[-0.04em] text-black/70">
							{t(`links.navigation.${link.titleKey}`)}
						</Link>
					))}
				<SelectLanguage />
				<Link href="#download" className="cursor-pointer">
					<div className="flex items-center justify-center px-[20px] h-[44px] bg-[#3A73ED] rounded-[14px] hover:bg-[#3A73ED]/90 transition-all duration-300">
						<p className="font-inter font-medium text-[20px] tracking-[-0.05em] text-[#FFFFFF] leading-[100%]">
							{t("download")}
						</p>
					</div>
				</Link>
			</div>
		</header>
	);
};

export { LayoutHeader };
