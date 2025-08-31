import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import Image from "next/image";
import { Fragment } from "react";

import { AboutCards } from "~/components/AboutCards";
import { DownloadLinks } from "~/components/DownloadLink";
import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { Plans } from "~/components/Plans";
import { SingleVersionSlider } from "~/components/SingleVersionSlider";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "HomePage" });
	const headersList = await headers();
	const userAgent = headersList.get("user-agent") || "";

	return (
		<Fragment>
			<LayoutHeader />
			<main>
				<section className="relative min-h-[100vh] w-full px-[25px] pt-[90px] pb-[50px] lg:px-[40px] lg:pt-[110px] lg:pb-[90px] flex flex-col">
					<Image
						src="/bg.webp"
						fill
						alt="bg"
						className="object-cover"
						quality={95}
						style={{ scale: "1 -1" }}
					/>
					<h1 className="relative z-1 max-w-[1020px] font-nunito-sans font-black text-[48px] lg:text-[73px] leading-[109%] tracking-[-0.02em] uppercase text-white">
						{t("main.title")}
					</h1>
					<p className="relative z-1 max-w-[840px] font-inter pt-[18px] lg:pt-[24px] font-medium text-[22px] leading-[134%] tracking-[-0.007em] text-white">
						{t("main.text")}
					</p>
					{/* <div className="relative z-1 pt-[18px] lg:pt-[24px]">
						<a
							href="https://www.producthunt.com/products/trust-vault-secure-data-storage?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-trust&#0045;vault&#0045;secure&#0045;data&#0045;storage"
							target="_blank">
							<img
								src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1011068&theme=dark&t=1756639117134"
								alt="Trust&#0032;Vault&#0032;—&#0032;Secure&#0032;Data&#0032;Storage - Encrypt&#0032;and&#0032;decrypt&#0032;files&#0032;in&#0032;secure&#0032;containers | Product Hunt"
								width="250"
								height="54"
							/>
						</a>
					</div> */}

					<div className="relative z-1 flex flex-col lg:grid lg:grid-cols-2 gap-[20px] mt-[18px] lg:mt-auto">
						<div className="px-[20px] py-[30px] lg:px-[40px] lg:py-[30px] rounded-[12px] bg-[rgba(210,210,210,0.1)] backdrop-blur-[40px]">
							<h2 className="font-inter font-bold text-[24px] leading-[122.6%] text-white">
								{t("main.download.title")}
							</h2>
							<p className="mt-[16px] lg:mt-[20px] max-w-[450px] h-[42px] lg:h-[58px] font-inter font-medium text-[16px] lg:text-[20px] leading-[134%] tracking-[0.007em] text-white">
								{t("main.download.text")}
							</p>
							<a
								href="#download"
								className="mt-[20px] lg:mt-[30px] flex items-center justify-center w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] rounded-full bg-white cursor-pointer hover:bg-white/80 transition-all duration-300">
								<Image
									src="/icons/arrow_right.svg"
									alt="arrow_right"
									width={32}
									height={11}
									className="pointer-events-none"
								/>
							</a>
						</div>
						<div className="px-[20px] py-[30px] lg:px-[40px] lg:py-[30px] rounded-[12px] bg-[rgba(210,210,210,0.1)] backdrop-blur-[40px]">
							<h2 className="font-inter font-bold text-[24px] leading-[122.6%] text-white">
								{t("main.roadmap.title")}
							</h2>
							<p className="mt-[16px] lg:mt-[20px] max-w-[400px] h-[42px] lg:h-[58px] font-inter font-medium text-[16px] lg:text-[20px] leading-[134%] tracking-[0.007em] text-white">
								{t("main.roadmap.text")}
							</p>
							<a
								href="#plans"
								className="mt-[20px] lg:mt-[30px] flex items-center justify-center w-[50px] h-[50px] lg:w-[65px] lg:h-[65px] rounded-full bg-white cursor-pointer hover:bg-white/80 transition-all duration-300">
								<Image
									src="/icons/arrow_right.svg"
									alt="arrow_right"
									width={32}
									height={11}
									className="pointer-events-none"
								/>
							</a>
						</div>
					</div>
				</section>
				<section className="pt-[50px] px-[20px] lg:pt-[120px] lg:px-[40px]" id="about">
					<h2 className="font-nunito-sans font-black text-[36px] lg:text-[60px] leading-[109%] tracking-[-0.02em] uppercase text-[#141414]">
						{t("about.title")}
					</h2>
					<p className="lg:max-w-[1000px] mt-[48px] lg:mt-[85px] font-inter font-medium text-[18px] lg:text-[26px] leading-[128.6%] text-[#141414]">
						{t("about.text")}
					</p>
					<div className="mt-[48px]">
						<AboutCards />
					</div>
					<h3 className="mt-[48px] lg:mt-[70px] font-nunito-sans font-black text-[28px] lg:text-[48px] leading-[109%] tracking-[-0.02em] uppercase text-[#5D5B5B]">
						{t("about.for.title")}
					</h3>
					<ul className="mt-[48px] lg:mt-[80px] font-inter font-medium text-[16px] lg:text-[26px] leading-[128.6%] text-[#141414] opacity-60 list-disc list-inside">
						{new Array(4).fill(0).map((_, index) => (
							<li key={index}>{t(`about.for.${index + 1}`)}</li>
						))}
					</ul>
					<div className="hidden lg:flex lg:flex-col lg:gap-[2px] mt-[80px] font-nunito-sans text-[60px] font-black leading-[109%] tracking-[-0.02em] uppercase text-[#FFFFFF]">
						<div className="flex">
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.1")}
							</div>
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.2")}
							</div>
						</div>
						<div className="flex">
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.3")}
							</div>
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.4")}
							</div>
						</div>
						<div className="flex">
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.5")}
							</div>
							<div className="flex items-center justify-center w-fit px-[40px] h-[84px] bg-[#1648F9] rounded-full">
								{t("about.badges.6")}
							</div>
						</div>
					</div>
				</section>
				<section className="mt-[48px] lg:mt-[80px] px-[20px] lg:px-[40px]" id="versions">
					<h2 className="font-nunito-sans font-black text-[36px] lg:text-[48px] leading-[109%] tracking-[-0.02em] uppercase text-[#141414]">
						{t("versions.title")}
					</h2>
					<div className="mt-[48px] lg:mt-[80px]">
						<div className="flex flex-col lg:grid gap-[48px] lg:items-start lg:[grid-template-columns:1fr_5px_1fr_5px_1fr]">
							<div className="flex flex-col gap-[20px]">
								<p className="font-nunito-sans font-black text-[26px] leading-[122%] uppercase text-[#141414]">
									{t("versions.single.title")}
								</p>
								<p className="lg:h-[240px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] opacity-80">
									{t("versions.single.text")}
								</p>
							</div>
							<div className="hidden lg:block w-[5px] h-[150px] bg-[#EBF1FA] mt-[30px]" />
							<div className="flex flex-col gap-[20px]">
								<p className="font-nunito-sans font-black text-[26px] leading-[122%] uppercase text-[#141414]">
									{t("versions.enterprise.title")}
								</p>
								<p className="lg:h-[240px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] opacity-80">
									{t("versions.enterprise.text")}
								</p>
							</div>
							<div className="hidden lg:block w-[5px] h-[150px] bg-[#EBF1FA] mt-[30px]" />
							<div className="flex flex-col gap-[20px]">
								<p className="font-nunito-sans font-black text-[26px] leading-[122%] uppercase text-[#141414]">
									{t("versions.cloud.title")}
								</p>
								<p className="lg:h-[240px] font-inter font-medium text-[18px] leading-[144%] text-[#141414] opacity-80">
									{t("versions.cloud.text")}
								</p>
							</div>
						</div>
					</div>
					<h3
						className="mt-[48px] lg:mt-[15px] font-nunito-sans font-black text-[48px] leading-[109%] tracking-[-0.02em] uppercase text-[#5D5B5B]"
						id="download">
						{t("single.title")}
					</h3>
					<p className="mt-[48px] lg:mt-[80px] font-inter font-medium text-[16px] lg:text-[26px] leading-[128%] text-[#5D5B5B]">
						<span className="font-black">{t("single.text.1")}</span>
						<br />
						{t("single.text.2")}
					</p>
					<DownloadLinks
						title1={t("single.text.3")}
						title2={t("single.text.4")}
						titleButton={t("single.download")}
						userAgent={userAgent}
					/>
					<div className="hidden lg:block mt-[32px]">
						<SingleVersionSlider />
					</div>
				</section>
				<section className="mt-[48px] lg:mt-[80px] px-[20px] lg:px-[40px] pb-[100px] lg:pb-[65px]" id="plans">
					<h2 className="font-nunito-sans font-black text-[36px] lg:text-[60px] leading-[109%] tracking-[-0.02em] uppercase text-[#141414]">
						{t("plans.title")}
					</h2>
					<p className="mt-[48px] lg:mt-[80px] font-inter font-medium text-[18px] lg:text-[26px] leading-[128%] text-[#141414]">
						{t("plans.text")}
					</p>
					<div className="mt-[30px] lg:mt-[80px]">
						<Plans />
					</div>
				</section>
			</main>
			<LayoutFooter />
		</Fragment>
	);
}
