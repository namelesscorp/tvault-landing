"use client";

import { MouseEvent } from "react";

import { cn } from "~/utils/css";
import { track } from "~/utils/track";

interface MacDownloadButtonClientProps {
	macArm: string;
	macIntel: string;
	title: string;
	className?: string;
}

const MacDownloadButtonClient = ({ macArm, macIntel, title, className }: MacDownloadButtonClientProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		let href = macIntel || macArm;

		try {
			const canvas = document.createElement("canvas");
			const gl = canvas.getContext("webgl");
			const debugInfo = gl && gl.getExtension("WEBGL_debug_renderer_info");
			const renderer =
				gl &&
				debugInfo &&
				gl.getParameter((debugInfo as unknown as { UNMASKED_RENDERER_WEBGL: GLenum }).UNMASKED_RENDERER_WEBGL);

			if (typeof renderer === "string") {
				const value = renderer.toLowerCase();
				const isAppleSilicon = value.includes("apple m") || value.includes("metal gpu family apple");

				if (isAppleSilicon) {
					href = macArm || macIntel;
				}
			}
		} catch {
			// ignore GPU detection errors, fallback to default href
		}

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

export { MacDownloadButtonClient };
