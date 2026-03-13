"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ButtonBlue } from "../ButtonBlue";
import { ImgIcon } from "../ImgIcon";
import { Input } from "../Input";

const SubscribeModal = ({ onClose }: { onClose: () => void }) => {
	const t = useTranslations("SubscribeModal");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

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
					source: "subscribe-modal",
					name,
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
		<div
			className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/50"
			onClick={onClose}>
			<div
				className="fixed w-[380px] lg:w-[670px] py-[20px] px-[37px] lg:py-[30px] lg:px-[25px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F0F3FF_100%)] border-2 border-[#E6E7EB] rounded-[10px]"
				onClick={e => e.stopPropagation()}>
				<div className="flex items-center justify-center gap-[10px]">
					<ImgIcon icon="bell.svg" width={35} height={35} color="#3A73ED" className="hidden lg:block" />
					<ImgIcon icon="bell.svg" width={28} height={28} color="#3A73ED" className="block lg:hidden" />
					<p className="font-inter font-extrabold text-[20px] lg:text-[32px] tracking-[-0.05em] text-[#3A73ED]">
						{t("title")}
					</p>
				</div>
				<p className="font-inter font-medium text-[16px] lg:text-[20px] lg:max-w-[414px] mx-auto tracking-[-0.05em] text-black/70 text-center my-[15px] lg:my-[20px] leading-[110%]">
					{t("text")}
				</p>
				<form className="mt-[8px] lg:mt-[25px] flex flex-col gap-[15px] lg:gap-[25px]" onSubmit={handleSubmit}>
					<div className="flex flex-col gap-[10px]">
						<div className="flex items-center gap-[5px]">
							<ImgIcon icon="user.svg" width={24} height={24} color="#000000" className="opacity-70" />
							<label className="font-inter font-medium text-[16px] tracking-[-0.05em] text-black/70">
								{t("form.name")}
							</label>
						</div>
						<Input
							type="text"
							placeholder={t("form.namePlaceholder")}
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="flex flex-col gap-[10px]">
						<div className="flex items-center gap-[5px]">
							<ImgIcon icon="mail.svg" width={24} height={24} color="#000000" className="opacity-70" />
							<label className="font-inter font-medium text-[16px] tracking-[-0.05em] text-black/70">
								{t("form.email")}
							</label>
						</div>
						<Input
							type="text"
							placeholder={t("form.emailPlaceholder")}
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="lg:mt-[7px] flex items-center gap-[10px]">
						<input type="checkbox" id="agree" />
						<label
							htmlFor="agree"
							className="font-inter font-medium text-[15px] tracking-[-0.05em] text-black/70">
							{t("form.agree")}
							{/* <Link href="/privacy-policy" className="underline">
								{t("form.privacy")}
							</Link> */}
						</label>
					</div>
					<ButtonBlue className="lg:h-[50px] mt-[10px] lg:mt-0 lg:text-[20px]">
						{isSubmitting ? t("form.sending") : isSuccess ? t("form.sent") : t("form.subscribe")}
					</ButtonBlue>
					{error && <p className="mt-[8px] font-inter text-[14px] text-red-600 text-center">{error}</p>}
				</form>
			</div>
		</div>
	);
};

export { SubscribeModal };
