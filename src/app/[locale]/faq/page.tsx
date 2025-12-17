import { getTranslations } from "next-intl/server";
import { Fragment } from "react";

import { ImgIcon } from "~/components/ImgIcon";
import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { cn } from "~/utils/css";

const sectionsCount = 1;
const itemsCountBySection = [5];

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "FAQ" });

	return (
		<Fragment>
			<LayoutHeader />
			<main>
				<section className="pt-[50px] px-[25px] py-[40px] lg:px-[40px] lg:py-[50px]">
					<h1
						className={cn(
							"px-[25px] font-inter font-extrabold tracking-[-0.05em] text-black/80 text-center lg:text-[48px] leading-[110%]",
							locale === "ru" ? "text-[40px] leading-[110%]" : "text-[48px] leading-[110%]",
						)}>
						{t("title")}
					</h1>
					<div className="flex flex-col gap-[40px] mt-[40px] items-center">
						{new Array(sectionsCount).fill(0).map((_, index) => (
							<div className="flex flex-col gap-[40px] w-full max-w-[1100px] items-center" key={index}>
								<div className="flex items-center justify-center w-fit h-[45px] px-[20px] bg-[#DBE9FE] rounded-[10px]">
									<h2 className="font-inter font-medium text-[16px] tracking-[-0.05em] text-[#3A73ED] text-center">
										{t(`sections.${index + 1}.title`)}
									</h2>
								</div>
								<div className="flex flex-col gap-[20px] w-full">
									{new Array(itemsCountBySection[index]).fill(0).map((_, itemIndex) => {
										const checkboxId = `faq-${index}-${itemIndex}`;
										return (
											<div
												className="bg-white/80 border-2 border-[#E6E7EB] rounded-[10px] has-[:checked]:[&>label>div:last-child]:max-h-[1000px] has-[:checked]:[&>label>div:first-child>div]:rotate-90"
												key={itemIndex}>
												<input type="checkbox" id={checkboxId} className="hidden" />
												<label htmlFor={checkboxId} className="flex flex-col cursor-pointer">
													<div className="flex items-center p-[20px]">
														<div className="flex-shrink-0 transition-transform duration-300">
															<ImgIcon
																icon="chevron_right.svg"
																color="#000000"
																width={40}
																height={40}
															/>
														</div>
														<h3 className="font-inter font-semibold text-[24px] tracking-[-0.05em] text-black/80">
															{t(`sections.${index + 1}.items.${itemIndex + 1}.question`)}
														</h3>
													</div>
													<div className="max-h-0 overflow-hidden transition-all duration-300">
														<p className="font-inter font-medium text-[16px] tracking-[-0.05em] text-black/70 px-[20px] pb-[20px]">
															{t(`sections.${index + 1}.items.${itemIndex + 1}.answer`)}
														</p>
													</div>
												</label>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
			<LayoutFooter />
		</Fragment>
	);
}
