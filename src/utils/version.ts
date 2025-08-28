let cachedVersion: string | null = null;
let cacheExpiry: number = 0;

export async function getAppVersion(): Promise<string> {
	const now = Date.now();

	if (cachedVersion && now < cacheExpiry) {
		return cachedVersion;
	}

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/version`);

		if (!response.ok) {
			throw new Error(`Failed to fetch version: ${response.status}`);
		}

		const data = await response.json();

		if (data.error) {
			throw new Error(data.error);
		}

		cachedVersion = data.version;
		cacheExpiry = now + 24 * 60 * 60 * 1000;

		return data.version;
	} catch (error) {
		console.error("Error fetching app version:", error);
		return "0.1.2-beta";
	}
}
