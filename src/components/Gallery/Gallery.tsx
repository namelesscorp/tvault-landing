"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, useEffect, useMemo, useState } from "react";

import { cn } from "~/utils/css";

import { GalleryItem } from "../GalleryItem";
import { IGalleryItemProps } from "../GalleryItem/GalleryItem.model";
import { ImgIcon } from "../ImgIcon";

const Gallery = ({ items }: { items: IGalleryItemProps[] }) => {
	const t = useTranslations("Gallery");
	const [modalVisible, setModalVisible] = useState(false);
	const [modalItemIndex, setModalItemIndex] = useState(0);

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

	const handlePrevItem = () => {
		setModalItemIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
	};

	const handleNextItem = () => {
		setModalItemIndex(prev => (prev + 1) % filteredItems.length);
	};

	useEffect(() => {
		if (modalVisible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [modalVisible]);

	return (
		<Fragment>
			<div className="flex flex-col items-center">
				<div className="flex flex-wrap justify-center items-center gap-[25px]">
					{categories.map(category => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={cn(
								"flex items-center justify-center gap-[5px] px-[30px] h-[45px] rounded-[10px] border-2 border-[#3A73ED] transition-all duration-300 cursor-pointer",
								activeCategory === category
									? "bg-[#3A73ED] text-white"
									: "bg-transparent text-[#3A73ED]",
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
					{filteredItems.map((item, index) => (
						<GalleryItem
							key={item.title}
							{...item}
							onClick={() => {
								setModalVisible(true);
								setModalItemIndex(index);
							}}
						/>
					))}
				</div>
			</div>
			{modalVisible && (
				<div
					className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
					onClick={() => setModalVisible(false)}>
					<div
						className="fixed w-full max-w-[90vw] lg:max-w-[1300px] h-[90vh] lg:h-[900px] mx-auto grid grid-rows-[1fr_auto] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)] border-2 border-[#E6E7EB] rounded-[10px]"
						onClick={e => e.stopPropagation()}>
						<div className="relative">
							<Image
								src={filteredItems[modalItemIndex].image}
								alt={filteredItems[modalItemIndex].title}
								fill
								className="object-contain"
							/>
						</div>
						<div className="grid grid-cols-[2fr_1fr] px-[20px] lg:px-[30px] py-[20px] lg:py-[44px] border-2 border-t-2 border-x-0 border-b-0 border-solid border-[#E6E7EB] rounded-[10px] rounded-t-none">
							<div className="flex flex-col gap-[20px] lg:gap-[30px]">
								<p className="font-inter font-semibold text-[16px] lg:text-[24px] tracking-[-0.05em] leading-[110%] text-black/80">
									{filteredItems[modalItemIndex].title}
								</p>
								<p className="font-inter font-medium text-[14px] lg:text-[16px] tracking-[-0.05em] leading-[110%] text-black/70">
									{filteredItems[modalItemIndex].description}
								</p>
								<div className="flex flex-wrap gap-[10px]">
									{filteredItems[modalItemIndex].tags?.map(tag => (
										<span
											key={tag}
											className="block px-[20px] py-[3px] rounded-[10px] bg-[#DBE9FE] font-inter font-medium text-[16px] tracking-[-0.05em] leading-[100%] text-[#3A73ED]">
											{t(`tags.${tag}`)}
										</span>
									))}
								</div>
							</div>
							<div className="flex flex-col justify-between justify-self-end items-end">
								<div className="flex gap-[10px]">
									<div className="w-[35px] h-[35px] bg-[#3A73ED] rounded-[10px] flex items-center justify-center cursor-pointer">
										<ImgIcon icon="download.svg" width={22} height={22} color="#FFFFFF" />
									</div>
									<div className="w-[35px] h-[35px] bg-[#4A5562] rounded-[10px] flex items-center justify-center cursor-pointer">
										<ImgIcon icon="link_external.svg" width={22} height={22} color="#FFFFFF" />
									</div>
								</div>
								<div className="flex items-center gap-[12px]">
									<div
										className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] bg-[#DBE9FE] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#DBE9FE]/80 transition-all duration-300"
										onClick={handlePrevItem}>
										<ImgIcon icon="arrow_narrow_left.svg" width={24} height={24} color="#3A73ED" />
									</div>
									<p className="font-inter font-regular text-[14px] tracking-[-0.05em] leading-[100%] text-black/60 whitespace-nowrap">
										{modalItemIndex + 1} / {filteredItems.length}
									</p>
									<div
										className="w-[35px] h-[35px] lg:w-[50px] lg:h-[50px] bg-[#DBE9FE] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#DBE9FE]/80 transition-all duration-300"
										onClick={handleNextItem}>
										<ImgIcon icon="arrow_narrow_right.svg" width={24} height={24} color="#3A73ED" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export { Gallery };
