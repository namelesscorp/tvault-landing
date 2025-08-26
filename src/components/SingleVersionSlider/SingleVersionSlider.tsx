"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const maxIndex = 2;

const classNames = {
	appear: "opacity-0",
	appearActive: "transition-opacity duration-300 opacity-100 ease-in-out",
	enter: "opacity-0",
	enterActive: "transition-opacity duration-300 opacity-100 ease-in-out",
	exitActive: "transition-opacity duration-300 opacity-0",
};

const SingleVersionSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const nodeRef = useRef(null);

	const handleNextSlide = () => {
		setCurrentSlide(prev => (prev + 1) % (maxIndex + 1));
	};

	const handlePrevSlide = () => {
		setCurrentSlide(prev => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
	};

	return (
		<div className="grid grid-cols-[60px_800px_60px] items-center justify-center gap-[35px]">
			<div className="hidden opacity-0 opacity-100 transition-opacity duration-300 ease-in-out"></div>
			<div
				className="flex items-center justify-center w-[60px] h-[60px] bg-[#EBF1FA] rounded-full cursor-pointer hover:bg-[#D9E1EC] transition-all duration-300"
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
				<CSSTransition key={currentSlide} timeout={300} classNames={classNames} nodeRef={nodeRef}>
					<div ref={nodeRef}>
						{currentSlide === 0 && (
							<div className="relative flex items-center justify-center h-[455px] py-[20px] px-[30px] bg-[#FFFFFF] rounded-[32px] shadow-[0px_4px_16px_rgba(200,200,200,0.25)]">
								<Image
									src="/single.png"
									alt="single_version_1"
									width={740}
									height={415}
									className="rounded-[20px] object-cover w-[740px] h-[415px]"
								/>
							</div>
						)}
						{currentSlide === 1 && (
							<div className="relative flex items-center justify-center h-[455px] py-[20px] px-[30px] bg-[#FFFFFF] rounded-[32px] shadow-[0px_4px_16px_rgba(200,200,200,0.25)]">
								<Image
									src="/single.png"
									alt="single_version_1"
									width={740}
									height={415}
									className="rounded-[20px] object-cover w-[740px] h-[415px]"
								/>
							</div>
						)}
						{currentSlide === 2 && (
							<div className="relative flex items-center justify-center h-[455px] py-[20px] px-[30px] bg-[#FFFFFF] rounded-[32px] shadow-[0px_4px_16px_rgba(200,200,200,0.25)]">
								<Image
									src="/single.png"
									alt="single_version_1"
									width={740}
									height={415}
									className="rounded-[20px] object-cover w-[740px] h-[415px]"
								/>
							</div>
						)}
					</div>
				</CSSTransition>
			</SwitchTransition>
			<div
				className="flex items-center justify-center w-[60px] h-[60px] bg-[#EBF1FA] rounded-full cursor-pointer hover:bg-[#D9E1EC] transition-all duration-300"
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
	);
};

export { SingleVersionSlider };
