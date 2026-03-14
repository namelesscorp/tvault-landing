import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment } from "react";

import { ImgIcon } from "../ImgIcon";
import { IGalleryItemProps, getItemMainImage } from "./GalleryItem.model";

const GalleryItem = ({
	title,
	description,
	image,
	images,
	tags,
	type,
	link,
	category,
	date,
	...props
}: IGalleryItemProps & React.HTMLAttributes<HTMLDivElement>) => {
	const t = useTranslations("Gallery");
	const mainImage = getItemMainImage({ title, description, image, images, tags, type, category, date });
	const altText = t(title);

	const cardClassName =
		"rounded-[10px] overflow-hidden bg-white/80 transition-all duration-300 hover:shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)] hover:border-[#BCDBFE] border-2 border-[#E6E7EB] cursor-pointer block";

	const content = (
		<Fragment>
			<div className="relative aspect-[16/9] bg-[#F3F4F6]">
				<Image
					src={mainImage}
					alt={altText}
					fill
					className={type === "link" ? "object-contain" : "object-cover"}
				/>
				{category && (
					<div className="absolute top-[20px] left-[20px] w-auto min-w-[106px] px-[10px] h-[25px] bg-[#F3F4F6]/80 rounded-[10px] flex items-center justify-center">
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] leading-[100%] text-black/70">
							{t(category)}
						</p>
					</div>
				)}
				<div className="absolute top-[20px] right-[20px] w-[50px] h-[50px] bg-[#3A73ED] rounded-[10px] flex items-center justify-center">
					<ImgIcon
						icon={type === "image" ? "image.svg" : type === "video" ? "play.svg" : "link_external.svg"}
						width={30}
						height={30}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-[20px] p-[20px]">
				<p className="font-inter font-medium text-[12px] tracking-[-0.05em] leading-[80%] text-black/70">
					{date}
				</p>
				<p className="font-inter font-semibold text-[24px] tracking-[-0.05em] leading-[110%] text-black">
					{t(title)}
				</p>
				<p className="font-inter font-medium text-[16px] tracking-[-0.05em] leading-[110%] text-black/70">
					{t(description)}
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
		</Fragment>
	);

	if (type === "link" && link) {
		return (
			<a href={link} target="_blank" rel="noopener noreferrer" className={cardClassName}>
				{content}
			</a>
		);
	}

	return (
		<div className={cardClassName} {...props}>
			{content}
		</div>
	);
};

export { GalleryItem };
