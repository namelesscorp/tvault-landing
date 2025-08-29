"use client";

import Link from "next/link";

const DownloadButtonClient = ({ link, title }: { link: string; title: string }) => {
	const handleClick = () => {
		window.gtag?.("event", "download");
	};

	return (
		<Link href={link} target="_blank" onClick={handleClick}>
			<button className="block mx-auto mt-[48px] w-[150px] lg:w-[250px] h-[50px] rounded-full border-none bg-[#1648F9] text-white font-nunito-sans font-black text-[20px] leading-[144%] tracking-[0.02em] uppercase cursor-pointer hover:bg-[#1648F9]/80 transition-all duration-300">
				{title}
			</button>
		</Link>
	);
};

export { DownloadButtonClient };
