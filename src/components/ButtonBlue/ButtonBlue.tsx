"use client";

import { cn } from "~/utils/css";
import { track } from "~/utils/track";

const ButtonBlue = ({
	children,
	className,
	eventName,
	...props
}: {
	children: React.ReactNode;
	className?: string;
	eventName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (eventName) {
			track(eventName);
		}
		props.onClick?.(event);
	};

	return (
		<button
			className={cn(
				"flex items-center justify-center px-[15px] h-[40px] bg-[#3A73ED] rounded-[10px] hover:bg-[#3A73ED]/90 transition-all duration-300 border-none cursor-pointer",
				className,
			)}
			{...props}
			onClick={handleClick}>
			<div className="font-inter font-medium text-[16px] tracking-[-0.05em] text-white leading-[100%] whitespace-nowrap">
				{children}
			</div>
		</button>
	);
};

export { ButtonBlue };
