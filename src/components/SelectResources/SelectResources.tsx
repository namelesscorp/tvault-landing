"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { HomeAnchorLink } from "../HomeAnchorLink";
import { links } from "../Links";

const resourcesLinks = links[1];

const SelectResources = () => {
	const t = useTranslations("HomePage.header");
	const tAlt = useTranslations("alt");
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<div className="flex items-center gap-[8px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
				<p className="font-inter font-medium text-[20px] tracking-[-0.05em] text-black/70">
					{t("links.resources.title")}
				</p>
				<Image
					src="/icons/arrow_down.svg"
					alt={tAlt("languageExpand")}
					width={13}
					height={11}
					className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
				/>
			</div>
			{isOpen && (
				<div className="absolute top-full left-0 mt-2 bg-[#1A1A1A]/90 backdrop-blur-sm rounded-[14px] border border-[#D2D2D2]/20 min-w-[160px] z-50 overflow-hidden">
					{resourcesLinks.map(link =>
						link.href.startsWith("#") ? (
							<HomeAnchorLink
								key={link.titleKey}
								href={link.href}
								className="block px-4 py-3 font-inter font-medium text-[16px] leading-[144%] tracking-[0.007em] text-[#D2D2D2] hover:bg-[#D2D2D2]/10 hover:text-white transition-colors duration-200"
								onClick={() => setIsOpen(false)}>
								{t(`links.resources.${link.titleKey}`)}
							</HomeAnchorLink>
						) : (
							<Link
								key={link.titleKey}
								href={link.href}
								className="block px-4 py-3 font-inter font-medium text-[16px] leading-[144%] tracking-[0.007em] text-[#D2D2D2] hover:bg-[#D2D2D2]/10 hover:text-white transition-colors duration-200"
								onClick={() => setIsOpen(false)}>
								{t(`links.resources.${link.titleKey}`)}
							</Link>
						),
					)}
				</div>
			)}
		</div>
	);
};

export { SelectResources };
