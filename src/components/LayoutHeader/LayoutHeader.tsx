import { useTranslations } from "next-intl";
import Link from "next/link";

import { MobileMenu } from "../MobileMenu";
import { SelectLanguage } from "../SelectLanguage";

const LayoutHeader = () => {
	const t = useTranslations("HomePage.header");
	return (
		<header className="absolute top-0 left-0 w-full z-10 p-[25px] flex justify-between items-center">
			<Link href="/" className="font-inter italic font-extrabold text-[22px] tracking-[-0.055em] text-white">
				Trust Vault
			</Link>
			<div className="block lg:hidden">
				<MobileMenu />
			</div>
			<div className="hidden lg:flex gap-[25px] items-center">
				<SelectLanguage />
				<Link href="#about" className="font-inter font-medium text-[18px] tracking-[-0.04em] text-[#FFFFFF]">
					{t("about")}
				</Link>
				<Link href="#versions" className="font-inter font-medium text-[18px] tracking-[-0.04em] text-[#FFFFFF]">
					{t("versions")}
				</Link>
				<Link href="#plans" className="font-inter font-medium text-[18px] tracking-[-0.04em] text-[#FFFFFF]">
					{t("plans")}
				</Link>
				<Link href="#download">
					<div className="flex items-center justify-center px-[20px] h-[44px] bg-[#D2D2D2]/20 rounded-[14px] hover:bg-[#D2D2D2]/40 transition-all duration-300">
						<p className="font-inter font-medium text-[18px] tracking-[-0.04em] text-[#FFFFFF] leading-[100%]">
							{t("download")}
						</p>
					</div>
				</Link>
			</div>
		</header>
	);
};

export { LayoutHeader };
