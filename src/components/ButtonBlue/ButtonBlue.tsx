import { cn } from "~/utils/css";

const ButtonBlue = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<button
			className={cn(
				"flex items-center justify-center px-[15px] h-[40px] bg-[#3A73ED] rounded-[10px] hover:bg-[#3A73ED]/90 transition-all duration-300 border-none cursor-pointer",
				className,
			)}>
			<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#FFFFFF] leading-[100%] whitespace-nowrap">
				{children}
			</p>
		</button>
	);
};

export { ButtonBlue };
