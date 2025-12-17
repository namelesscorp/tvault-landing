"use client";

import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { cn } from "~/utils/css";

import { GalleryItem } from "../GalleryItem";
import { IGalleryItemProps } from "../GalleryItem/GalleryItem.model";

const Gallery = ({ items }: { items: IGalleryItemProps[] }) => {
	const t = useTranslations("Gallery");

	const categories = useMemo(() => {
		return ["categories.all", ...new Set(items.map(item => item.category))];
	}, [items]);
	const [activeCategory, setActiveCategory] = useState(categories[0]);

	const filteredItems = useMemo(() => {
		if (activeCategory === "categories.all") {
			return items;
		}
		return items.filter(item => item.category === activeCategory);
	}, [items, activeCategory]);

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-wrap justify-center items-center gap-[25px]">
				{categories.map(category => (
					<button
						key={category}
						onClick={() => setActiveCategory(category)}
						className={cn(
							"flex items-center justify-center gap-[5px] px-[30px] h-[45px] rounded-[10px] border-2 border-[#3A73ED] transition-all duration-300 cursor-pointer",
							activeCategory === category ? "bg-[#3A73ED] text-white" : "bg-transparent text-[#3A73ED]",
						)}>
						<p className="font-inter font-medium text-[16px] tracking-[-0.05em] leading-[100%] transition-all duration-300 whitespace-nowrap">
							{t(category)}
						</p>
						<div
							className={cn(
								"flex items-center justify-center w-[25px] h-[25px] rounded-full transition-all duration-300",
								activeCategory === category ? "bg-[#E1E1E1]/44" : "bg-black/5",
							)}>
							<p className="font-inter font-medium text-[16px] tracking-[-0.05em] leading-[100%] transition-all duration-300 whitespace-nowrap">
								{category === "categories.all"
									? items.length
									: items.filter(item => item.category === category).length}
							</p>
						</div>
					</button>
				))}
			</div>
			<div className="flex w-full max-w-[1236px] flex-col gap-[30px] lg:grid lg:[grid-template-columns:repeat(auto-fit,_minmax(380px,_1fr))] lg:gap-x-[48px] lg:gap-y-[40px] mt-[40px]">
				{filteredItems.map(item => (
					<GalleryItem key={item.title} {...item} />
				))}
			</div>
		</div>
	);
};

export { Gallery };
