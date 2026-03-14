"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { ImgIcon } from "../ImgIcon";

const COOKIE_CONSENT_KEY = "tvault_cookie_consent";
const COOKIE_CONSENT_ACCEPTED = "accepted";

const CookieBanner = () => {
	const t = useTranslations("CookieBanner");
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		try {
			const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
			setIsVisible(value !== COOKIE_CONSENT_ACCEPTED);
		} catch {
			setIsVisible(true);
		}
	}, []);

	const acceptCookies = () => {
		try {
			window.localStorage.setItem(COOKIE_CONSENT_KEY, COOKIE_CONSENT_ACCEPTED);
		} catch {
			// ignore
		}
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className="fixed bottom-[20px] left-[20px] right-[20px] lg:bottom-[20px] lg:left-[unset] lg:right-[20px] lg:w-[500px] flex flex-col gap-[10px] items-center mx-[20px] py-[12px] px-[15px] lg:py-[20px] lg:px-[30px] border-2 border-[#E6E7EB] rounded-[10px] z-50 bg-gradient-to-b from-white to-[#F0F3FF]">
			<p className="font-inter font-extrabold text-[20px] lg:text-[24px] tracking-[-0.05em] text-[#3A73ED]">
				{t("title")}
			</p>
			<p className="font-inter font-medium text-[12px] lg:text-[16px] text-center tracking-[-0.05em] text-black/70">
				{t("text.line1")}
				<br />
				{t("text.line2")}
				<br />
				{t("text.line3")}
			</p>
			<div className="absolute top-[15px] right-[15px]">
				<button type="button" onClick={acceptCookies} aria-label={t("close")} className="cursor-pointer">
					<ImgIcon icon="cross.svg" width={20} height={20} color="#3A73ED" />
				</button>
			</div>
		</div>
	);
};

export { CookieBanner };
