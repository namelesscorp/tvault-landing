"use client";

import Link from "next/link";

const DownloadLinkClient = ({ link, title }: { link: string; title: string }) => {
	const handleClick = () => {
		window.gtag?.("event", "download");
	};

	return (
		<Link href={link} target="_blank" className="underline" onClick={handleClick}>
			{title}
		</Link>
	);
};

export { DownloadLinkClient };
