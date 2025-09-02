import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const LayoutFooter = () => {
	const t = useTranslations("HomePage.footer");
	return (
		<footer className="px-[20px] py-[40px] lg:px-[40px]  bg-[#08091C]">
			<div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-[60px] lg:gap-[0px]">
				<div className="flex flex-col gap-[12px] lg:gap-[20px]">
					<p className="font-inter lg:uppercase font-medium text-[22px] leading-[134%] tracking-[0.007em] lg:text-[40px] lg:font-black text-[#FFFFFF] lg:leading-[100%]">
						{t("questions.1")}
						<br />
						{t("questions.2")}
					</p>
					<a
						href="mailto:support@tvault.app"
						className="font-inter lg:uppercase font-medium text-[22px] leading-[134%] tracking-[0.007em] lg:text-[40px] lg:font-black text-[#1648F9] lg:leading-[100%] underline underline-offset-[6px] lg:underline-offset-[10px]">
						support@tvault.app
					</a>
				</div>
				<div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[20px]">
					<a
						href="https://t.me/tvault_app"
						target="_blank"
						className="font-inter font-medium text-[22px] leading-[134%] tracking-[0.007em] lg:text-[18px] lg:leading-[144%]  text-[#FFFFFF]">
						Telegram
					</a>
					<a
						href="https://github.com/namelesscorp/"
						target="_blank"
						className="font-inter font-medium text-[22px] leading-[134%] tracking-[0.007em] lg:text-[18px] lg:leading-[144%]  text-[#FFFFFF]">
						GitHub
					</a>
				</div>
			</div>
			<div className="flex justify-between items-end mt-[60px] lg:mt-[180px]">
				<Image src="/nameless_logo.svg" alt="Nameless" width={98} height={65} />
				<div className="font-inter font-medium text-[18px] leading-[124%] tracking-[0.007em] text-[rgba(255,255,255,0.6)] text-right">
					<p>
						<Link href="/en">EN</Link> / <Link href="/ru">RU</Link>
					</p>
					{/* <Link href="#" className="hidden lg:block mt-[26px]">Политика обработки персональных данных</Link> */}
					<p className="mt-[20px] lg:mt-[26px]">&copy; 2025 {t("copyright")}</p>
				</div>
			</div>
		</footer>
	);
};

export { LayoutFooter };
