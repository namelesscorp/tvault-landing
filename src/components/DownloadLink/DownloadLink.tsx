import { Fragment } from "react";

import { extractDownloadLinks, getBestDownloadLink } from "~/utils/downloads";

import { DownloadButtonClient } from "../DownloadButtonClient";
import { DownloadLinkClient } from "../DownloadLinkClient";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const fallback = "https://github.com/namelesscorp/tvault/releases";

const DownloadLinks = async ({
	title1,
	title2,
	title3,
	titleButton,
	userAgent,
}: {
	title1: string;
	title2: string;
	title3: string;
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
					<DownloadLinkClient link={release.windows64 || fallback} title="64-bit" /> /{" "}
					<DownloadLinkClient link={release.windows32 || fallback} title="32-bit" />
				</span>{" "}
				{title2}{" "}
				<span className="font-semibold lg:font-black">
					<DownloadLinkClient link={release.macIntel || fallback} title="Intel" /> /{" "}
					<DownloadLinkClient link={release.macArm || fallback} title="Apple Silicon" />
				</span>{" "}
				{title3}{" "}
				<span className="font-semibold lg:font-black">
					<DownloadLinkClient link={release.linux || fallback} title="AppImage" />
				</span>
			</p>
			<DownloadButtonClient link={bestDownloadLink} title={titleButton} />
		</Fragment>
	);
};

export { DownloadLinks };
