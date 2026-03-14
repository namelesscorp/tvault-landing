import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";

import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { cn } from "~/utils/css";
import { buildAlternates, getBaseUrl } from "~/utils/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata.privacy" });
	const path = "/privacy";
	const canonicalUrl = `${getBaseUrl()}/${locale}${path}`;
	return {
		title: t("title"),
		description: t("description"),
		alternates: buildAlternates(locale, path),
		openGraph: { url: canonicalUrl },
		twitter: { card: "summary_large_image" },
	};
}

const p = "font-inter font-medium text-[16px] lg:text-[18px] tracking-[-0.05em] text-black/80 leading-[150%]";
const h2 = "font-inter font-extrabold text-[20px] lg:text-[24px] tracking-[-0.05em] text-black/80 mt-8 mb-3";
const h3 = "font-inter font-semibold text-[18px] lg:text-[20px] tracking-[-0.05em] text-black/80 mt-6 mb-2";
const ul = "list-disc pl-6 mt-2 space-y-1";

function PrivacyContentEn() {
	return (
		<Fragment>
			<p className={cn("mt-4 text-black/60", p)}>Last updated: March 14, 2026</p>
			<p className={cn("mt-6", p)}>
				Welcome to TVault (https://tvault.app). This Privacy Policy explains how we collect, use, and protect
				your information when you use our website.
			</p>
			<p className={cn("mt-3", p)}>
				By using this website, you agree to the collection and use of information in accordance with this
				policy.
			</p>

			<h2 className={h2}>1. Information We Collect</h2>
			<p className={p}>We may collect the following types of information.</p>
			<h3 className={h3}>Personal Information</h3>
			<p className={p}>
				When you interact with our website, we may collect personal information that you voluntarily provide,
				including:
			</p>
			<ul className={ul}>
				<li className={p}>Email address</li>
				<li className={p}>Username (name used within the service)</li>
			</ul>
			<h3 className={h3}>Usage Data</h3>
			<p className={p}>
				We automatically collect certain technical information when you visit the website, such as:
			</p>
			<ul className={ul}>
				<li className={p}>IP address</li>
				<li className={p}>Browser type and version</li>
				<li className={p}>Device type</li>
				<li className={p}>Pages visited</li>
				<li className={p}>Time and date of visits</li>
				<li className={p}>Referring URLs</li>
			</ul>

			<h2 className={h2}>2. Analytics and Tracking Technologies</h2>
			<p className={p}>
				We use third-party analytics services to understand how users interact with our website and improve our
				services.
			</p>
			<h3 className={h3}>Google Analytics</h3>
			<p className={p}>
				We use Google Analytics to analyze website traffic and usage patterns. Google Analytics may collect
				information such as:
			</p>
			<ul className={ul}>
				<li className={p}>IP address</li>
				<li className={p}>Device information</li>
				<li className={p}>Pages visited</li>
				<li className={p}>Session duration</li>
				<li className={p}>Interaction data</li>
			</ul>
			<p className={cn("mt-2", p)}>Google may process this data in accordance with its own privacy policies.</p>
			<h3 className={h3}>Yandex Metrica</h3>
			<p className={p}>We also use Yandex Metrica to collect anonymous usage statistics, including:</p>
			<ul className={ul}>
				<li className={p}>User interactions with the website</li>
				<li className={p}>Page visits</li>
				<li className={p}>Session duration</li>
				<li className={p}>Device and browser information</li>
			</ul>
			<p className={cn("mt-2", p)}>
				These analytics tools help us improve the functionality and performance of the website.
			</p>

			<h2 className={h2}>3. How We Use Your Information</h2>
			<p className={p}>We use the collected information for the following purposes:</p>
			<ul className={ul}>
				<li className={p}>To operate and maintain the website</li>
				<li className={p}>To provide and improve our services</li>
				<li className={p}>To communicate with users</li>
				<li className={p}>To respond to inquiries</li>
				<li className={p}>To analyze website usage and performance</li>
				<li className={p}>To send updates or product information when appropriate</li>
			</ul>

			<h2 className={h2}>4. Sharing of Information</h2>
			<p className={p}>We do not sell or rent your personal information.</p>
			<p className={cn("mt-2", p)}>
				Your data may be shared with trusted third-party service providers that help us operate the website,
				such as analytics providers.
			</p>

			<h2 className={h2}>5. Data Security</h2>
			<p className={p}>
				We implement reasonable technical and organizational measures to protect your information from
				unauthorized access, disclosure, or destruction.
			</p>
			<p className={cn("mt-2", p)}>However, no method of transmission over the internet is completely secure.</p>

			<h2 className={h2}>6. Your Rights</h2>
			<p className={p}>Depending on your jurisdiction, you may have the right to:</p>
			<ul className={ul}>
				<li className={p}>Request access to your personal data</li>
				<li className={p}>Request correction of inaccurate data</li>
				<li className={p}>Request deletion of your data</li>
				<li className={p}>Object to certain processing activities</li>
			</ul>
			<p className={cn("mt-2", p)}>You may contact us to exercise these rights.</p>

			<h2 className={h2}>7. Children&apos;s Privacy</h2>
			<p className={p}>
				Our website is not intended for children under the age of 13, and we do not knowingly collect personal
				information from children.
			</p>

			<h2 className={h2}>8. Changes to This Privacy Policy</h2>
			<p className={p}>
				We may update this Privacy Policy from time to time. The updated version will be posted on this page
				with a revised &quot;Last updated&quot; date.
			</p>

			<h2 className={h2}>9. Contact Information</h2>
			<p className={p}>If you have questions about this Privacy Policy, please contact us:</p>
			<p className={cn("mt-2", p)}>
				Email:{" "}
				<a href="mailto:privacy@tvault.app" className="text-[#3A73ED] underline hover:no-underline">
					privacy@tvault.app
				</a>
			</p>
		</Fragment>
	);
}

function PrivacyContentRu() {
	return (
		<Fragment>
			<p className={cn("mt-4 text-black/60", p)}>Дата последнего обновления: 14 марта 2026 года</p>
			<p className={cn("mt-6", p)}>
				Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных
				пользователей сайта https://tvault.app (далее — «Сайт»).
			</p>
			<p className={cn("mt-3", p)}>
				Используя Сайт, пользователь выражает согласие с данной Политикой и условиями обработки персональных
				данных. Обработка персональных данных осуществляется в соответствии с требованиями законодательства
				Российской Федерации, включая Федеральный закон №152-ФЗ «О персональных данных».
			</p>

			<h2 className={h2}>1. Какие данные мы собираем</h2>
			<p className={p}>Мы можем собирать следующие данные пользователей.</p>
			<h3 className={h3}>Персональные данные</h3>
			<p className={p}>Пользователь может добровольно предоставить следующие данные:</p>
			<ul className={ul}>
				<li className={p}>адрес электронной почты (email)</li>
				<li className={p}>имя пользователя (username)</li>
			</ul>
			<h3 className={h3}>Технические данные</h3>
			<p className={p}>При посещении сайта автоматически собираются технические данные, включая:</p>
			<ul className={ul}>
				<li className={p}>IP-адрес</li>
				<li className={p}>тип браузера</li>
				<li className={p}>тип устройства</li>
				<li className={p}>данные о посещенных страницах</li>
				<li className={p}>время посещения</li>
				<li className={p}>источник перехода на сайт</li>
			</ul>

			<h2 className={h2}>2. Использование систем веб-аналитики</h2>
			<p className={p}>
				На сайте используются системы аналитики для анализа поведения пользователей и улучшения работы сайта.
			</p>
			<h3 className={h3}>Яндекс Метрика</h3>
			<p className={p}>
				Сайт использует сервис веб-аналитики Яндекс Метрика, который позволяет получать обезличенные данные о
				действиях пользователей на сайте. Яндекс Метрика может собирать:
			</p>
			<ul className={ul}>
				<li className={p}>данные о посещениях страниц</li>
				<li className={p}>информацию о действиях пользователей</li>
				<li className={p}>технические характеристики устройства и браузера</li>
			</ul>
			<h3 className={h3}>Google Analytics</h3>
			<p className={p}>
				Также используется сервис Google Analytics, который помогает анализировать посещаемость сайта и
				поведение пользователей. Google Analytics может собирать:
			</p>
			<ul className={ul}>
				<li className={p}>IP-адрес</li>
				<li className={p}>данные о браузере и устройстве</li>
				<li className={p}>страницы сайта, которые посещает пользователь</li>
				<li className={p}>продолжительность сессии</li>
			</ul>

			<h2 className={h2}>3. Цели обработки персональных данных</h2>
			<p className={p}>Персональные данные используются для следующих целей:</p>
			<ul className={ul}>
				<li className={p}>обеспечение работы сайта</li>
				<li className={p}>предоставление функциональности сервиса</li>
				<li className={p}>анализ использования сайта</li>
				<li className={p}>улучшение качества сервиса</li>
				<li className={p}>обратная связь с пользователями</li>
				<li className={p}>информирование о сервисах и обновлениях</li>
			</ul>

			<h2 className={h2}>4. Передача персональных данных</h2>
			<p className={p}>
				Мы не продаем и не передаем персональные данные пользователей третьим лицам, за исключением следующих
				случаев:
			</p>
			<p className={cn("mt-2", p)}>
				использование сервисов веб-аналитики; выполнение требований законодательства Российской Федерации.
			</p>

			<h2 className={h2}>5. Защита персональных данных</h2>
			<p className={p}>
				Мы принимаем необходимые организационные и технические меры для защиты персональных данных пользователей
				от неправомерного доступа, изменения, раскрытия или уничтожения.
			</p>

			<h2 className={h2}>6. Права пользователя</h2>
			<p className={p}>Пользователь имеет право:</p>
			<ul className={ul}>
				<li className={p}>получать информацию о своих персональных данных</li>
				<li className={p}>требовать уточнения или удаления персональных данных</li>
				<li className={p}>отозвать согласие на обработку персональных данных</li>
			</ul>
			<p className={cn("mt-2", p)}>
				Для реализации своих прав пользователь может связаться с нами по электронной почте.
			</p>

			<h2 className={h2}>7. Изменения политики конфиденциальности</h2>
			<p className={p}>
				Администрация сайта имеет право вносить изменения в настоящую Политику конфиденциальности. Актуальная
				версия всегда доступна на этой странице.
			</p>

			<h2 className={h2}>8. Контактная информация</h2>
			<p className={p}>По вопросам обработки персональных данных можно связаться с нами:</p>
			<p className={cn("mt-2", p)}>
				Email:{" "}
				<a href="mailto:privacy@tvault.app" className="text-[#3A73ED] underline hover:no-underline">
					privacy@tvault.app
				</a>
			</p>
		</Fragment>
	);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const isEn = locale === "en";

	return (
		<Fragment>
			<LayoutHeader />
			<main>
				<section className="pt-[50px] px-[25px] py-[40px] lg:px-[40px] lg:py-[50px]">
					<div className="mx-auto max-w-[800px]">
						<h1
							className={cn(
								"font-inter font-extrabold tracking-[-0.05em] text-black/80 lg:text-[48px] leading-[110%]",
								locale === "ru" ? "text-[32px] leading-[110%]" : "text-[40px] leading-[110%]",
							)}>
							{isEn ? "Privacy Policy" : "Политика конфиденциальности"}
						</h1>
						{isEn ? <PrivacyContentEn /> : <PrivacyContentRu />}
					</div>
				</section>
			</main>
			<LayoutFooter />
		</Fragment>
	);
}
