interface PlatformData {
	url: string;
}

interface ReleaseData {
	version: string;
	notes: string;
	pub_date: string;
	platforms: {
		"darwin-aarch64"?: PlatformData;
		"darwin-x86_64"?: PlatformData;
		"windows-x86_64"?: PlatformData;
		"windows-i686"?: PlatformData;
		"linux-x86_64"?: PlatformData;
		[key: string]: PlatformData | undefined;
	};
}

interface DownloadLinks {
	macArm: string | null;
	macIntel: string | null;
	windows64: string | null;
	windows32: string | null;
	linux: string | null;
}

/**
 * Converts .app.tar.gz URL to .dmg for Mac platforms
 * @param url - source URL
 * @returns URL with .dmg extension
 */
function convertToDmgUrl(url: string): string {
	return url.replace(".app.tar.gz", ".dmg");
}

/**
 * Extracts download links from release data object
 * @param releaseData - release data object
 * @returns object with 4 links for different platforms
 */
export function extractDownloadLinks(releaseData: ReleaseData): DownloadLinks {
	const macArmUrl = releaseData.platforms["darwin-aarch64"]?.url;
	const macIntelUrl = releaseData.platforms["darwin-x86_64"]?.url;

	return {
		macArm: macArmUrl ? convertToDmgUrl(macArmUrl) : null,
		macIntel: macIntelUrl ? convertToDmgUrl(macIntelUrl) : null,
		windows64: releaseData.platforms["windows-x86_64"]?.url || null,
		windows32: releaseData.platforms["windows-i686"]?.url || null,
		linux: releaseData.platforms["linux-x86_64"]?.url || null,
	};
}

/**
 * Determines user's operating system from User-Agent header
 * @param userAgent - User-Agent string from request headers
 * @returns string indicating OS (e.g., 'mac', 'windows', 'linux', 'unknown')
 */
function detectUserOS(userAgent?: string): string {
	if (userAgent?.includes("Mac OS X")) {
		return "mac";
	}
	if (userAgent?.includes("Windows")) {
		return "windows";
	}
	if (userAgent?.includes("Linux")) {
		return "linux";
	}
	return "unknown";
}

/**
 * Selects the best download link based on user's operating system
 * @param links - object with links for different platforms
 * @param fallback - fallback link
 * @param userAgent - User-Agent string from request headers
 * @returns appropriate download link
 */
export function getBestDownloadLink(links: DownloadLinks, fallback: string, userAgent?: string): string {
	const os = detectUserOS(userAgent);

	switch (os) {
		case "mac":
			// For Mac prefer Apple Silicon, but if not available - use Intel
			return links.macArm || links.macIntel || fallback;
		case "windows":
			// For Windows prefer 64-bit, but if not available - use 32-bit
			return links.windows64 || links.windows32 || fallback;
		case "linux":
			// For Linux use fallback for now, as there are no specific links
			return fallback;
		default:
			// For unknown OS use fallback
			return fallback;
	}
}
