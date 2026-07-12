import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	poweredByHeader: false,
	images: {
		formats: ["image/avif", "image/webp"],
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
