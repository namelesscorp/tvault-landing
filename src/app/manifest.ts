import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Trust Vault — Secure Data Storage and Transfer",
		short_name: "Trust Vault",
		description:
			"Create reliable encrypted containers, distribute access with ease, and securely transfer data without risk.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#3A73ED",
		categories: ["security", "productivity", "utilities"],
		icons: [
			{
				src: "/favicon.png",
				sizes: "any",
				type: "image/png",
			},
		],
	};
}
