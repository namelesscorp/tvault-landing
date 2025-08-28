import { NextResponse } from "next/server";

export async function GET() {
	try {
		const response = await fetch("https://github.com/namelesscorp/tvault/releases/latest/download/updater.json", {
			headers: {
				"User-Agent": "TrustVault-Landing/1.0",
			},
			next: { revalidate: 86400 },
		});

		if (!response.ok) {
			throw new Error(`GitHub API responded with status: ${response.status}`);
		}

		const data = await response.json();

		return NextResponse.json({ version: data.version });
	} catch (error) {
		console.error("Error fetching version:", error);
		return NextResponse.json({ error: "Failed to fetch version" }, { status: 500 });
	}
}
