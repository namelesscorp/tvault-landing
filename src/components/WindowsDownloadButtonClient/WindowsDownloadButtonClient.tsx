"use client";

import { MouseEvent } from "react";

import { cn } from "~/utils/css";
import { track } from "~/utils/track";

interface WindowsDownloadButtonClientProps {
	windows64: string;
	windows32: string;
	title: string;
	className?: string;
}

const WindowsDownloadButtonClient = ({ windows64, windows32, title, className }: WindowsDownloadButtonClientProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		const ua = navigator.userAgent;
		const is64Bit = ua.includes("Win64") || ua.includes("WOW64") || ua.includes("x64");
		const href = (is64Bit ? windows64 : windows32) || windows64;

		track("download");
		window.open(href, "_blank", "noopener,noreferrer");
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className={cn(
				"flex items-center justify-center px-[15px] h-[40px] bg-[#3A73ED] rounded-[10px] hover:bg-[#3A73ED]/90 transition-all duration-300 border-none cursor-pointer w-full",
				className,
			)}>
			<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#FFFFFF] leading-[100%] whitespace-nowrap">
				{title}
			</p>
		</button>
	);
};

export { WindowsDownloadButtonClient };
