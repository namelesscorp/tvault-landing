import { useTranslations } from "next-intl";
import Image from "next/image";

import { ImgIcon } from "../ImgIcon";
import { IGalleryItemProps } from "./GalleryItem.model";

const GalleryItem = ({
	title,
	description,
	image,
	tags,
	type,
	category,
	...props
}: IGalleryItemProps & React.HTMLAttributes<HTMLDivElement>) => {
	const t = useTranslations("Gallery");

	return (
		<div
			className="rounded-[10px] overflow-hidden bg-white/80 transition-all duration-300 hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] hover:border-[#BCDBFE] border-2 border-[#E6E7EB] cursor-pointer"
			{...props}>
			<div className="relative aspect-[16/9]">
				<Image src={image} alt={title} fill className="object-cover" />
				{category && (
					<div className="absolute top-[20px] left-[20px] w-auto min-w-[106px] px-[10px] h-[25px] bg-[#F3F4F6]/80 rounded-[10px] flex items-center justify-center">
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] leading-[100%] text-black/70">
							{t(category)}
						</p>
					</div>
				)}
				<div className="absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-[#3A73ED] rounded-[10px] flex items-center justify-center">
					<ImgIcon icon={type === "image" ? "image.svg" : "play.svg"} width={30} height={30} />
				</div>
			</div>
			<div className="flex flex-col gap-[20px] p-[20px]">
				<p className="font-inter font-semibold text-[24px] tracking-[-0.05em] leading-[110%] text-black">
					{title}
				</p>
				<p className="font-inter font-medium text-[16px] tracking-[-0.05em] leading-[110%] text-black/70">
					{description}
				</p>
				<div className="flex flex-wrap gap-[10px]">
					{tags?.map(tag => (
						<span
							key={tag}
							className="block px-[20px] py-[3px] rounded-[10px] bg-[#F3F4F6] font-inter font-medium text-[16px] tracking-[-0.05em] leading-[100%] text-black/70">
							{t(`tags.${tag}`)}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export { GalleryItem };
