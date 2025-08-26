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

const Plans = () => {
	const t = useTranslations("HomePage.plans");
	const [currentSlide, setCurrentSlide] = useState(0);
	const nodeRefNumbers = useRef(null);
	const nodeRefText = useRef(null);

	const handleNextSlide = () => {
		setCurrentSlide(prev => (prev + 1) % (maxIndex + 1));
	};

	const handlePrevSlide = () => {
		setCurrentSlide(prev => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
	};
	return (
		<Fragment>
			<div className="block lg:hidden">
				<div className="grid grid-cols-[60px_1fr_60px] justify-between items-start gap-[20px]">
					<div
						className="flex items-center justify-center w-[60px] h-[60px] mt-[5px] bg-[#EBF1FA] rounded-full cursor-pointer hover:bg-[#D9E1EC] transition-all duration-300"
						onClick={handlePrevSlide}>
						<Image
							src="/icons/arrow_right_2.svg"
							alt="arrow_right_2"
							width={24}
							height={24}
							className="rotate-180 user-select-none pointer-events-none"
						/>
					</div>
					<SwitchTransition>
						<CSSTransition
							key={currentSlide}
							nodeRef={nodeRefNumbers}
							timeout={300}
							classNames={classNames}
							appear>
							<div ref={nodeRefNumbers}>
								{currentSlide === 0 && (
									<div className="flex flex-col items-center gap-[40px]">
										<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#00A87B]/15">
											<p className="font-roboto font-medium text-[28px] text-[#00A87B]">1</p>
										</div>
										<p className="font-nunito-sans font-bold text-[22px] text-[#141414]">
											{t("items.1.title")}
										</p>
									</div>
								)}
								{currentSlide === 1 && (
									<div className="flex flex-col items-center gap-[40px]">
										<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#AEA131]/15">
											<p className="font-roboto font-medium text-[28px] text-[#AEA131]">2</p>
										</div>
										<p className="font-nunito-sans font-bold text-[22px] text-[#141414]">
											{t("items.2.title")}
										</p>
									</div>
								)}
								{currentSlide === 2 && (
									<div className="flex flex-col items-center gap-[40px]">
										<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#EBF1FA]">
											<p className="font-roboto font-medium text-[28px] text-[#1648F9]">3</p>
										</div>
										<p className="font-nunito-sans font-bold text-[22px] text-[#141414]">
											{t("items.3.title")}
										</p>
									</div>
								)}
								{currentSlide === 3 && (
									<div className="flex flex-col items-center gap-[40px]">
										<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#EBF1FA]">
											<p className="font-roboto font-medium text-[28px] text-[#1648F9]">4</p>
										</div>
										<p className="font-nunito-sans font-bold text-[22px] text-[#141414]">
											{t("items.4.title")}
										</p>
									</div>
								)}
							</div>
						</CSSTransition>
					</SwitchTransition>
					<div
						className="flex items-center justify-center w-[60px] h-[60px] mt-[5px] bg-[#EBF1FA] rounded-full cursor-pointer hover:bg-[#D9E1EC] transition-all duration-300"
						onClick={handleNextSlide}>
						<Image
							src="/icons/arrow_right_2.svg"
							alt="arrow_right_2"
							width={24}
							height={24}
							className="user-select-none pointer-events-none"
						/>
					</div>
				</div>
				<div className="mt-[40px]">
					<SwitchTransition>
						<CSSTransition
							key={currentSlide}
							nodeRef={nodeRefText}
							timeout={300}
							classNames={classNames}
							appear>
							<p
								ref={nodeRefText}
								className="font-inter font-medium text-[14px] leading-[22px] text-[#141414] max-w-[500px] mx-auto text-center">
								{currentSlide === 0 && t("items.1.text")}
								{currentSlide === 1 && t("items.2.text")}
								{currentSlide === 2 && t("items.3.text")}
								{currentSlide === 3 && t("items.4.text")}
							</p>
						</CSSTransition>
					</SwitchTransition>
				</div>
			</div>
			<div className="hidden lg:grid lg:grid-cols-4 gap-[30px]">
				<div>
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#00A87B]/15">
							<p className="font-roboto font-medium text-[28px] text-[#00A87B]">1</p>
						</div>
						<div className="overflow-hidden flex-shrink-0 min-w-0 w-[50%]">
							<Image
								src="/plans_arrow.svg"
								alt="plans_arrow"
								width={185}
								height={29}
								className="object-contain"
							/>
						</div>
					</div>
					<p className="font-nunito-sans font-bold text-[22px] leading-[24px] text-[#141414] mt-[28px]">
						{t("items.1.title")}
					</p>
					<p className="font-inter text-[14px] leading-[22px] text-[#141414] mt-[30px]">
						{t("items.1.text")}
					</p>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#AEA131]/15">
							<p className="font-roboto font-medium text-[28px] text-[#AEA131]">2</p>
						</div>
						<div className="overflow-hidden flex-shrink-0 min-w-0  w-[50%]">
							<Image
								src="/plans_arrow.svg"
								alt="plans_arrow"
								width={185}
								height={29}
								className="object-contain"
							/>
						</div>
					</div>
					<p className="font-nunito-sans font-bold text-[22px] leading-[24px] text-[#141414] mt-[28px]">
						{t("items.2.title")}
					</p>
					<p className="font-inter text-[14px] leading-[22px] text-[#141414] mt-[30px]">
						{t("items.2.text")}
					</p>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#EBF1FA]">
							<p className="font-roboto font-medium text-[28px] text-[#1648F9]">3</p>
						</div>
						<div className="overflow-hidden flex-shrink-0 min-w-0  w-[50%]">
							<Image
								src="/plans_arrow.svg"
								alt="plans_arrow"
								width={185}
								height={29}
								className="object-contain"
							/>
						</div>
					</div>
					<p className="font-nunito-sans font-bold text-[22px] leading-[24px] text-[#141414] mt-[28px]">
						{t("items.3.title")}
					</p>
					<p className="font-inter text-[14px] leading-[22px] text-[#141414] mt-[30px]">
						{t("items.3.text")}
					</p>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-center w-[70px] h-[70px] rounded-[15px] bg-[#EBF1FA]">
							<p className="font-roboto font-medium text-[28px] text-[#1648F9]">4</p>
						</div>
					</div>
					<p className="font-nunito-sans font-bold text-[22px] leading-[24px] text-[#141414] mt-[28px]">
						{t("items.4.title")}
					</p>
					<p className="font-inter text-[14px] leading-[22px] text-[#141414] mt-[30px]">
						{t("items.4.text")}
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export { Plans };
