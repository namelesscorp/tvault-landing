"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { ButtonTransparent } from "../ButtonTransparent";
import { ImgIcon } from "../ImgIcon";
import { Input } from "../Input";

const SubscribeFormRoadmap = () => {
	const t = useTranslations("HomePage");
	const [email, setEmail] = useState("");

	return (
		<form>
			<p className="font-inter font-medium text-[20px] tracking-[-0.05em] text-black/70 text-center">
				{t("roadmap.bottom.title")}
			</p>
			<p className="mt-[20px] font-inter font-medium text-[16px] tracking-[-0.05em] text-black/70 text-center leading-[110%]">
				{t("roadmap.bottom.text")}
			</p>
			<div className="grid [grid-template-columns:1fr_175px] lg:[grid-template-columns:1fr_200px] lg:max-w-[720px] mx-auto gap-[10px] mt-[20px]">
				<Input
					type="email"
					placeholder={t("roadmap.bottom.email")}
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<ButtonTransparent className="h-[45px]">{t("roadmap.bottom.subscribe")}</ButtonTransparent>
			</div>
			<div className="flex items-center justify-center mt-[20] gap-[5px]">
				<input type="checkbox" id="agree" />
				<label
					htmlFor="agree"
					className="font-inter font-medium text-[12px] lg:text-[15px] tracking-[-0.05em] text-black/70">
					{t("roadmap.bottom.agree")}{" "}
					<Link href="/privacy-policy" className="font-semibold">
						{t("roadmap.bottom.privacy")}
					</Link>
				</label>
			</div>
			<p className="mt-[40px] font-inter font-medium text-[20px] tracking-[-0.05em] text-black/70 text-center">
				{t("roadmap.bottom.follow")}
			</p>
			<div className="flex items-center justify-center mt-[20px] gap-[20px]">
				<Link href="https://github.com/tvault_app">
					<ImgIcon icon="github.svg" color="#3A73ED" width={50} height={50} />
				</Link>
				<Link href="https://t.me/tvault_app">
					<ImgIcon icon="telegram.svg" color="#3A73ED" width={50} height={50} />
				</Link>
				<Link href="https://x.com/tvault_app">
					<ImgIcon icon="twitter.svg" color="#3A73ED" width={50} height={50} />
				</Link>
			</div>
		</form>
	);
};

export { SubscribeFormRoadmap };
