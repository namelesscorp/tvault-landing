"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SelectLanguage = () => {
	const params = useParams();
	const pathname = usePathname();
	const currentLocale = params.locale as string;
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

	const languages = [
		{ code: "en", name: "English" },
		{ code: "ru", name: "Русский" },
	];

	const currentLanguage = languages.find(lang => lang.code === currentLocale);

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
				<p className="font-inter font-medium text-[18px] leading-[144%] tracking-[0.007em] text-white">
					{currentLanguage?.code}
				</p>
				<Image
					src="/icons/arrow_down.svg"
					alt="arrow_down"
					width={8}
					height={6}
					className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
				/>
			</div>
			{isOpen && (
				<div className="absolute top-full left-0 mt-2 bg-[#1A1A1A]/90 backdrop-blur-sm rounded-[14px] border border-[#D2D2D2]/20 min-w-[120px] z-50 overflow-hidden">
					{languages.map(language => (
						<Link
							key={language.code}
							href={`/${language.code}${pathWithoutLocale}`}
							className={`block px-4 py-3 font-inter font-medium text-[16px] leading-[144%] tracking-[0.007em] hover:bg-[#D2D2D2]/10 transition-colors duration-200 ${
								language.code === currentLocale ? "text-white" : "text-[#D2D2D2]"
							}`}
							onClick={() => setIsOpen(false)}>
							{language.name}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export { SelectLanguage };
