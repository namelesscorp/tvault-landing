"use client";

import Link from "next/link";

import { cn } from "~/utils/css";
import { track } from "~/utils/track";

const DownloadLinkClient = ({ link, title, className }: { link: string; title: string; className?: string }) => {
	const handleClick = () => {
		track("download");
	};

	return (
		<Link href={link} target="_blank" className={cn("underline", className)} onClick={handleClick}>
			{title}
		</Link>
	);
};

export { DownloadLinkClient };
