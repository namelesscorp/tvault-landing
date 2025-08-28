import { NextResponse } from "next/server";

export interface ReleasePlatform {
	signature: string;
	url: string;
}

export interface ReleaseData {
	version: string;
	notes: string;
	pub_date: string;
	platforms: {
		"darwin-aarch64": ReleasePlatform;
		"darwin-x86_64": ReleasePlatform;
		"windows-x86_64": ReleasePlatform;
		"windows-i686": ReleasePlatform;
	};
}

export async function GET() {
	try {
		const response = await fetch("https://github.com/namelesscorp/tvault/releases/latest/download/updater.json", {
			headers: {
				"User-Agent": "TrustVault-Landing/1.0",
			},
			next: { revalidate: 300 },
		});

		if (!response.ok) {
			throw new Error(`GitHub API responded with status: ${response.status}`);
		}

		const data: ReleaseData = await response.json();

		return NextResponse.json(data);
	} catch (error) {
		console.error("Error fetching release data:", error);
		return NextResponse.json({ error: "Failed to fetch release data" }, { status: 500 });
	}
}
