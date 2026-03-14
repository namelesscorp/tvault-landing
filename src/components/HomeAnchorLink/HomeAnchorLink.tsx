"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

type HomeAnchorLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string;
	children: React.ReactNode;
	className?: string;
};

const HomeAnchorLink = ({ href, children, className, ...rest }: HomeAnchorLinkProps) => {
	const pathname = usePathname();
	const params = useParams();
	const locale = params.locale as string | undefined;

	const isHomePage = pathname === "/" || pathname === `/${locale}`;
	const resolvedHref = href.startsWith("#") && !isHomePage && locale ? `/${locale}${href}` : href;

	return (
		<Link href={resolvedHref} className={className} {...rest}>
			{children}
		</Link>
	);
};

export { HomeAnchorLink };
