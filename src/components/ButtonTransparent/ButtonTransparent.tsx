import { cn } from "~/utils/css";

const ButtonTransparent = ({ children, className }: { children: React.ReactNode; className?: string | undefined }) => {
	return (
		<button
			className={cn(
				"flex items-center justify-center px-[15px] h-[40px] rounded-[10px] text-[#3A73ED] hover:text-[#3A73ED]/90 border-2 border-[#3A73ED] transition-all duration-300 cursor-pointer",
				className,
			)}>
			<p className="font-inter font-medium text-[16px] tracking-[-0.05em] leading-[100%] transition-all duration-300 whitespace-nowrap">
				{children}
			</p>
		</button>
	);
};

export { ButtonTransparent };
