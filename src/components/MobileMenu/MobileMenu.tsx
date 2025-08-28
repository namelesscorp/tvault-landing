"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const MobileMenu = () => {
	const t = useTranslations("HomePage.header");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen]);

	return (
		<Fragment>
			<Image
				src="/icons/menu.svg"
				alt="menu"
				width={36}
				height={36}
				className="cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<div className="fixed top-0 left-0 w-full h-full bg-[#1F1E1E]/85 z-50 p-[25px]">
					<div className="flex justify-between items-center">
						<Link
							href="/"
							className="font-inter italic font-extrabold text-[22px] tracking-[-0.055em] text-white">
							Trust Vault
						</Link>
						<div className="p-[10px] cursor-pointer" onClick={() => setIsOpen(false)}>
							<Image src="/icons/cross.svg" alt="close" width={20} height={20} />
						</div>
					</div>
					<div className="mt-[60px] flex flex-col gap-[36px] items-end">
						<Link
							href="#about"
							className="font-inter font-medium text-[15px] tracking-[0.007em] text-[#FFFFFF]"
							onClick={() => setIsOpen(false)}>
							{t("about")}
						</Link>
						<Link
							href="#versions"
							className="font-inter font-medium text-[15px] tracking-[0.007em] text-[#FFFFFF]"
							onClick={() => setIsOpen(false)}>
							{t("versions")}
						</Link>
						<Link
							href="#plans"
							className="font-inter font-medium text-[15px] tracking-[0.007em] text-[#FFFFFF]"
							onClick={() => setIsOpen(false)}>
							{t("plans")}
						</Link>
						<Link href="#download" onClick={() => setIsOpen(false)}>
							<div className="flex items-center justify-center px-[28px] h-[46px] rounded-[14px] border border-white ">
								<p className="font-inter font-medium text-[15px] tracking-[-0.04em] text-[#FFFFFF] leading-[100%]">
									{t("download")}
								</p>
							</div>
						</Link>
						<div className="flex items-center gap-[32px]">
							<Link
								href="/ru"
								className="font-inter font-medium text-[15px] tracking-[0.007em] text-[#FFFFFF]"
								onClick={() => setIsOpen(false)}>
								ru
							</Link>
							<Link
								href="/en"
								className="font-inter font-medium text-[15px] tracking-[0.007em] text-[#FFFFFF]"
								onClick={() => setIsOpen(false)}>
								en
							</Link>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export { MobileMenu };
