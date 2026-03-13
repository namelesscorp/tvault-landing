"use client";

import Link from "next/link";

import { cn } from "~/utils/css";

const DownloadLinkClient = ({ link, title, className }: { link: string; title: string; className?: string }) => {
	const handleClick = () => {
		window.gtag?.("event", "download");
	};

	return (
		<Link href={link} target="_blank" className={cn("underline", className)} onClick={handleClick}>
			{title}
		</Link>
	);
};

export { DownloadLinkClient };
