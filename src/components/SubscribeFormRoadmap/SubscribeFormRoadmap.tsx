"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import { track } from "~/utils/track";

import { ButtonTransparent } from "../ButtonTransparent";
import { ImgIcon } from "../ImgIcon";
import { Input } from "../Input";

const SubscribeFormRoadmap = () => {
	const t = useTranslations("HomePage");
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (isSubmitting) {
			return;
		}

		setIsSubmitting(true);
		setIsSuccess(false);
		setError(null);

		try {
			const response = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					source: "roadmap-bottom",
					email,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to submit subscription");
			}

			setIsSuccess(true);
		} catch (e) {
			console.error(e);
			setError("Something went wrong. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
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
				<ButtonTransparent className="h-[45px]" disabled={isSubmitting}>
					{isSubmitting
						? t("roadmap.bottom.sending")
						: isSuccess
							? t("roadmap.bottom.sent")
							: t("roadmap.bottom.subscribe")}
				</ButtonTransparent>
			</div>
			{error && <p className="mt-[8px] font-inter text-[14px] text-red-600 text-center">{error}</p>}
			<div className="flex items-center justify-center mt-[20] gap-[5px]">
				<input type="checkbox" id="agree" />
				<label
					htmlFor="agree"
					className="font-inter font-medium text-[12px] lg:text-[15px] tracking-[-0.05em] text-black/70">
					{t("roadmap.bottom.agree")}{" "}
					<Link href="/privacy" className="font-semibold">
						{t("roadmap.bottom.privacy")}
					</Link>
				</label>
			</div>
			<p className="mt-[40px] font-inter font-medium text-[20px] tracking-[-0.05em] text-black/70 text-center">
				{t("roadmap.bottom.follow")}
			</p>
			<div className="flex items-center justify-center mt-[20px] gap-[20px]">
				<Link
					href="https://github.com/namelesscorp"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => track("social_click", { platform: "github", location: "roadmap" })}>
					<ImgIcon icon="github.svg" color="#3A73ED" width={50} height={50} />
				</Link>
				<Link
					href="https://t.me/tvault_app"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => track("social_click", { platform: "telegram", location: "roadmap" })}>
					<ImgIcon icon="telegram.svg" color="#3A73ED" width={50} height={50} />
				</Link>
				<Link
					href="https://x.com/tvault_app"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => track("social_click", { platform: "x", location: "roadmap" })}>
					<ImgIcon icon="twitter.svg" color="#3A73ED" width={50} height={50} />
				</Link>
			</div>
		</form>
	);
};

export { SubscribeFormRoadmap };
