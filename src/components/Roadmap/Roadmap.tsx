import { getTranslations } from "next-intl/server";

import { cn } from "~/utils/css";

import { ButtonTransparent } from "../ButtonTransparent";
import { ImgIcon } from "../ImgIcon";
import { Input } from "../Input";
import { SubscribeFormRoadmap } from "../SubscribeFormRoadmap";

enum RoadmapStatus {
	COMPLETED = "completed",
	CURRENT = "current",
	PLANNED = "planned",
}

const roadmapIcons = {
	[RoadmapStatus.COMPLETED]: {
		icon: "check_circle.svg",
		color: "#17A34A",
	},
	[RoadmapStatus.CURRENT]: {
		icon: "",
		color: "#2663EB",
	},
	[RoadmapStatus.PLANNED]: {
		icon: "clock.svg",
		color: "#D1D5DC",
	},
};

const roadmapItemsStatuses = [
	RoadmapStatus.COMPLETED,
	RoadmapStatus.COMPLETED,
	RoadmapStatus.CURRENT,
	RoadmapStatus.PLANNED,
	RoadmapStatus.PLANNED,
];

const Roadmap = async ({ locale }: { locale: string }) => {
	const t = await getTranslations({ locale, namespace: "HomePage" });

	return (
		<section className="flex flex-col items-center py-[40px] lg:py-[50px] lg:px-[40px] bg-[#F5F7FF]" id="roadmap">
			<h2
				className={cn(
					"px-[25px] font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px] leading-[110%]",
					locale === "ru" ? "text-[40px] leading-[110%]" : "text-[48px] leading-[110%]",
				)}>
				{t("roadmap.title")}
			</h2>
			<p
				className={cn(
					"px-[25px] font-semibold tracking-[-0.05em] text-black/70 text-center lg:text-[24px] mt-[40px] leading-[110%]",
					locale === "ru" ? "text-[20px] leading-[110%]" : "text-[24px] leading-[110%]",
				)}>
				{t("roadmap.text")}
			</p>
			<div className="block lg:grid lg:[grid-template-columns:2px_1fr] w-full max-w-[1210px] gap-[40px] mt-[40px] lg:mt-[60px] px-[25px] lg:px-[0px]">
				<div className="relative hidden lg:block w-[2px] h-full">
					<div className="absolute top-0 left-0 w-[1px] h-full ml-[1px] bg-[#D1D5DC]" />
				</div>
				<div className="flex flex-col gap-[40px] lg:gap-[50px]">
					{roadmapItemsStatuses.map((status, index) => (
						<div
							className={cn(
								"relative flex flex-col gap-[25px] p-[30px] bg-white/80 border-2 border-[#E6E7EB] rounded-[10px]",
								{
									"border-[#3A73ED]": status === RoadmapStatus.CURRENT,
									"shadow-[0px_5px_5px_2px_rgba(0,0,0,0.1)]": status === RoadmapStatus.CURRENT,
								},
							)}
							key={index}>
							<div
								className={cn(
									"absolute top-[30px] left-[-52px] z-2 hidden lg:block w-[20px] h-[20px] border-2 border-[#D1D5DC] rounded-full",
									{
										"bg-[#17A34A]": status === RoadmapStatus.COMPLETED,
										"bg-[#DBE9FE]": status === RoadmapStatus.CURRENT,
										"bg-[#BFC1C5]": status === RoadmapStatus.PLANNED,
									},
								)}></div>

							<div
								className={cn("flex items-center justify-center w-[110px] h-[25px] rounded-[10px]", {
									"bg-[#DCFCE8]": status === RoadmapStatus.COMPLETED,
									"bg-[#DBE9FE]": status === RoadmapStatus.CURRENT,
									"bg-[#F3F4F6]": status === RoadmapStatus.PLANNED,
									"w-[150px]": locale === "ru" && status === RoadmapStatus.PLANNED,
								})}>
								<p
									className={cn("font-inter font-medium text-[16px] tracking-[-0.05em]", {
										"text-[#156634]": status === RoadmapStatus.COMPLETED,
										"text-[#3A73ED]": status === RoadmapStatus.CURRENT,
										"text-black/80": status === RoadmapStatus.PLANNED,
									})}>
									{status === RoadmapStatus.COMPLETED
										? t("roadmap.completed")
										: status === RoadmapStatus.CURRENT
											? t("roadmap.current")
											: t("roadmap.planned")}
								</p>
							</div>

							<div className="grid [grid-template-columns:30px_1fr] gap-[10px]">
								<div className="mt-[20px]">
									{roadmapIcons[status].icon && (
										<ImgIcon
											icon={roadmapIcons[status].icon}
											color={roadmapIcons[status].color}
											width={30}
											height={30}
										/>
									)}
									{status === RoadmapStatus.CURRENT && (
										<div className="w-[30px] h-[30px] bg-[#DBE9FE] rounded-full"></div>
									)}
								</div>
								<div>
									<p className="font-inter font-bold text-[28px] tracking-[-0.05em] text-black/80">
										{t(`roadmap.items.${index + 1}.title`)}
									</p>
									<p className="font-inter font-medium text-[12px] lg:text-[16px] tracking-[-0.05em] text-black/70 mt-[3px]">
										{t(`roadmap.items.${index + 1}.text`)}
									</p>
								</div>
							</div>
							<div className="hidden lg:grid [grid-template-columns:400px_400px] gap-[20px]">
								{new Array(4).fill(0).map((_, i) => (
									<div
										className="grid [grid-template-columns:20px_1fr] gap-[5px]"
										key={`${index}-${i}`}>
										<ImgIcon icon="arrow_right_2.svg" color="#2663EB" width={20} height={20} />
										<p className="font-inter text-[16px] tracking-[-0.05em] text-black/70">
											{t(`roadmap.items.${index + 1}.info.${i + 1}`)}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full lg:max-w-[1200px] bg-[#3A73ED] lg:rounded-[10px] px-[30px] py-[40px] lg:px-0 lg:py-[35px] mt-[40px]">
				<p className="font-inter font-bold text-[32px] tracking-[-0.05em] text-white text-center">
					{t("roadmap.vision.title")}
				</p>
				<p className="max-w-[600px] mt-[5px] mx-auto font-inter font-medium text-[16px] tracking-[-0.05em] text-white/90 text-center">
					{t("roadmap.vision.text")}
				</p>
				<p className="mt-[5px] font-inter font-medium text-[14px] tracking-[-0.05em] text-white/80 text-center">
					✓&nbsp; {t("roadmap.vision.items.1")}&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("roadmap.vision.items.2")}
					&nbsp;&nbsp;&nbsp;&nbsp; ✓&nbsp; {t("roadmap.vision.items.3")}
				</p>
			</div>
			<div className="mt-[40px] px-[12px] lg:px-0">
				<SubscribeFormRoadmap />
			</div>
		</section>
	);
};

export { Roadmap };
