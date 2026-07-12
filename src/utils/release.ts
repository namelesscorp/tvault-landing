import { DownloadLinks, extractDownloadLinks } from "./downloads";

const UPDATER_URL = "https://github.com/namelesscorp/tvault/releases/latest/download/updater.json";
const REVALIDATE_SECONDS = 43200;
const FALLBACK_VERSION = "0.1.2-beta";

interface PlatformData {
	url: string;
}

export interface ReleaseData {
	version: string;
	notes: string;
	pub_date: string;
	platforms: Record<string, PlatformData | undefined>;
}

export async function getReleaseData(): Promise<ReleaseData | null> {
	try {
		const response = await fetch(UPDATER_URL, {
			headers: { "User-Agent": "TrustVault-Landing/1.0" },
			next: { revalidate: REVALIDATE_SECONDS },
		});

		if (!response.ok) {
			throw new Error(`Release feed responded with status: ${response.status}`);
		}

		return (await response.json()) as ReleaseData;
	} catch (error) {
		console.error("Error fetching release data:", error);
		return null;
	}
}

export async function getAppVersion(): Promise<string> {
	const release = await getReleaseData();
	return release?.version || FALLBACK_VERSION;
}

export async function getDownloadLinks(): Promise<DownloadLinks> {
	const release = await getReleaseData();

	if (!release) {
		return { macArm: null, macIntel: null, windows64: null, windows32: null, linux: null };
	}

	return extractDownloadLinks(release);
}
