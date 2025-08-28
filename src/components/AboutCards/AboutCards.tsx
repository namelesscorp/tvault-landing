"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const maxIndex = 3;

const classNames = {
	appear: "opacity-0",
	appearActive: "transition-opacity duration-300 opacity-100 ease-in-out",
	enter: "opacity-0",
	enterActive: "transition-opacity duration-300 opacity-100 ease-in-out",
	exitActive: "transition-opacity duration-300 opacity-0",
};

const AboutCards = () => {
	const t = useTranslations("HomePage");
	const [activeCard, setActiveCard] = useState(0);
	const nodeRef = useRef(null);

	const handleNextCard = () => {
		setActiveCard(prev => (prev + 1) % (maxIndex + 1));
	};

	const handlePrevCard = () => {
		setActiveCard(prev => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
	};

	return (
		<Fragment>
			<div className="grid lg:hidden grid-cols-[60px_1fr_60px] items-center gap-[15px]">
				<div
					className="flex items-center justify-center w-[60px] h-[60px] bg-[#EBF1FA] rounded-full cursor-pointer hover:bg-[#D9E1EC] transition-all duration-300"
					onClick={handlePrevCard}>
					<Image
						src="/icons/arrow_right_2.svg"
						alt="arrow_right_2"
						width={24}
						height={24}
						className="rotate-180 user-select-none pointer-events-none"
					/>
				</div>
				<SwitchTransition>
					<CSSTransition key={activeCard} timeout={300} classNames={classNames} nodeRef={nodeRef}>
						<div ref={nodeRef}>
							{activeCard === 0 && (
								<div className="relative flex items-center justify-center h-[177px] p-[20px] bg-[#EBF1FA] rounded-[32px]">
									<Image src="/about_card_1.png" alt="about_card_1" fill className="object-cover" />
									<p className="max-w-[300px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-center">
										{t("about.cards.1")}
									</p>
								</div>
							)}
							{activeCard === 1 && (
								<div className="relative flex items-center justify-center h-[177px] p-[20px] bg-[#EBF1FA] rounded-[32px] overflow-hidden">
									<Image
										src="/about_card_2.svg"
										alt="about_card_2"
										width={702}
										height={424}
										className="absolute top-1/2 left-1/2 max-w-[702px] max-h-[424px] -translate-x-1/2 -translate-y-1/2 object-cover"
									/>
									<p className="max-w-[300px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-center">
										{t("about.cards.2")}
									</p>
								</div>
							)}
							{activeCard === 2 && (
								<div className="relative flex flex-col items-center justify-center gap-[10px] h-[177px] p-[20px] bg-[#EBF1FA] rounded-[32px] overflow-hidden">
									<Image
										src="/about_card_3.svg"
										alt="about_card_3"
										width={60}
										height={60}
										className=""
									/>
									<p className="max-w-[300px] font-inter font-medium text-[16px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-center">
										{t("about.cards.3")}
									</p>
								</div>
							)}
							{activeCard === 3 && (
								<div className="relative flex flex-col items-center justify-center gap-[40px] h-[177px] p-[20px] bg-[#EBF1FA] rounded-[32px] overflow-hidden">
									<p className="max-w-[300px] font-inter font-medium text-[16px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-left">
										{t("about.cards.4")}
									</p>
									<Image
										src="/about_card_4.svg"
										alt="about_card_4"
										width={180}
										height={60}
										className=""
									/>
								</div>
							)}
						</div>
					</CSSTransition>
				</SwitchTransition>
				<div
					className="flex items-center justify-center w-[60px] h-[60px] bg-[#EBF1FA] rounded-full cursor-pointer hover:bg-[#D9E1EC] transition-all duration-300"
					onClick={handleNextCard}>
					<Image
						src="/icons/arrow_right_2.svg"
						alt="arrow_right_2"
						width={24}
						height={24}
						className="user-select-none pointer-events-none"
					/>
				</div>
			</div>
			<div className="hidden opacity-0 opacity-100 transition-opacity duration-300 ease-in-out"></div>
			<div className="hidden lg:grid lg:grid-cols-4 gap-[30px]">
				<div className="relative flex items-center justify-center h-[240px] p-[20px] bg-[#EBF1FA] rounded-[32px]">
					<Image src="/about_card_1.png" alt="about_card_1" fill className="object-cover" />
					<p className="max-w-[300px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-center">
						{t("about.cards.1")}
					</p>
				</div>
				<div className="relative flex items-center justify-center h-[240px] p-[20px] bg-[#EBF1FA] rounded-[32px] overflow-hidden">
					<Image
						src="/about_card_2.svg"
						alt="about_card_2"
						width={702}
						height={424}
						className="absolute top-1/2 left-1/2 max-w-[702px] max-h-[424px] -translate-x-1/2 -translate-y-1/2 object-cover"
					/>
					<p className="max-w-[300px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-center">
						{t("about.cards.2")}
					</p>
				</div>
				<div className="relative flex flex-col items-center justify-center gap-[10px] h-[240px] p-[20px] bg-[#EBF1FA] rounded-[32px] overflow-hidden">
					<Image src="/about_card_3.svg" alt="about_card_3" width={90} height={90} />
					<p className="max-w-[300px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-center">
						{t("about.cards.3")}
					</p>
				</div>
				<div className="relative flex flex-col items-center justify-center gap-[46px] h-[240px] p-[20px] bg-[#EBF1FA] rounded-[32px] overflow-hidden">
					<p className="max-w-[300px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] tracking-[0.007em] opacity-80 text-left">
						{t("about.cards.4")}
					</p>
					<Image src="/about_card_4.svg" alt="about_card_4" width={243} height={81} />
				</div>
			</div>
		</Fragment>
	);
};

export { AboutCards };
