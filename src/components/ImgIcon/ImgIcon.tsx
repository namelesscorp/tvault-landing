import { cn } from "~/utils/css";

interface ImgIconProps extends React.HTMLAttributes<HTMLDivElement> {
	icon: string;
	color?: string;
	width?: number;
	height?: number;
	pointer?: boolean;
}

const ImgIcon = ({
	icon,
	color = "#ffffff",
	width = 20,
	height = 20,
	pointer = false,
	className,
	style,
	...props
}: ImgIconProps) => {
	const iconPath = icon.startsWith("/") ? icon : `/icons/${icon}`;

	return (
		<div
			{...props}
			className={cn(
				"mask-contain mask-no-repeat transition-all duration-300",
				pointer && "cursor-pointer",
				className,
			)}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				maskImage: `url("${iconPath}")`,
				WebkitMaskImage: `url("${iconPath}")`,
				backgroundColor: color,
				...style,
			}}
		/>
	);
};

export { ImgIcon };
export type { ImgIconProps };
