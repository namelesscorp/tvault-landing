import Link from "next/link";
import { Fragment } from "react";

import { extractDownloadLinks, getBestDownloadLink } from "~/utils/downloads";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const fallback = "https://github.com/namelesscorp/tvault/releases";

const DownloadLinks = async ({
	title1,
	title2,
	titleButton,
	userAgent,
}: {
	title1: string;
	title2: string;
	titleButton: string;
	userAgent: string;
}) => {
	const release = await fetch(`${BASE_URL}/api/release`)
		.then(res => res.json())
		.then(data => extractDownloadLinks(data));

	const bestDownloadLink = getBestDownloadLink(release, fallback, userAgent);

	return (
		<Fragment>
			<p className="mt-[18px] lg:mt-[28px] font-inter font-medium text-[16px] lg:text-[26px] leading-[128%] text-[#5D5B5B]">
				{title1}{" "}
				<span className="font-semibold lg:font-black">
					<Link href={release.windows64 || fallback} target="_blank">
						64-bit
					</Link>{" "}
					/{" "}
					<Link href={release.windows32 || fallback} target="_blank">
						32-bit
					</Link>
				</span>{" "}
				{title2}{" "}
				<span className="font-semibold lg:font-black">
					<Link href={release.macIntel || fallback} target="_blank">
						Intel
					</Link>{" "}
					/{" "}
					<Link href={release.macArm || fallback} target="_blank">
						Apple Silicon
					</Link>
				</span>
			</p>
			<Link href={bestDownloadLink} target="_blank">
				<button className="block mx-auto mt-[48px] w-[150px] lg:w-[250px] h-[50px] rounded-full border-none bg-[#1648F9] text-white font-nunito-sans font-black text-[20px] leading-[144%] tracking-[0.02em] uppercase cursor-pointer hover:bg-[#1648F9]/80 transition-all duration-300">
					{titleButton}
				</button>
			</Link>
		</Fragment>
	);
};

export { DownloadLinks };
