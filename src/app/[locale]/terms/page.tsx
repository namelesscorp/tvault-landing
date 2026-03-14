import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Fragment } from "react";

import { LayoutFooter } from "~/components/LayoutFooter";
import { LayoutHeader } from "~/components/LayoutHeader";
import { cn } from "~/utils/css";
import { buildAlternates, getBaseUrl } from "~/utils/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata.terms" });
	const path = "/terms";
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
const ul = "list-disc pl-6 mt-2 space-y-1";
const linkClass = "text-[#3A73ED] underline hover:no-underline";

function TermsContentEn() {
	return (
		<Fragment>
			<p className={cn("mt-4 text-black/60", p)}>Last updated: March 14, 2026</p>
			<p className={cn("mt-6", p)}>
				Welcome to TVault (https://tvault.app). These Terms of Service (&quot;Terms&quot;) govern your access to
				and use of the website and services provided by TVault (&quot;Service&quot;).
			</p>
			<p className={cn("mt-3", p)}>
				By accessing or using the Service, you agree to be bound by these Terms. If you do not agree with these
				Terms, please do not use the Service.
			</p>

			<h2 className={h2}>1. Use of the Service</h2>
			<p className={p}>
				You may use the Service only in compliance with these Terms and all applicable laws and regulations.
			</p>
			<p className={p}>You agree not to:</p>
			<ul className={ul}>
				<li className={p}>use the Service for any unlawful purpose</li>
				<li className={p}>attempt to gain unauthorized access to the Service or its systems</li>
				<li className={p}>interfere with the proper functioning of the Service</li>
				<li className={p}>
					use automated systems to access the Service in a way that may harm its performance
				</li>
			</ul>
			<p className={p}>
				We reserve the right to suspend or terminate access to the Service if these Terms are violated.
			</p>

			<h2 className={h2}>2. User Accounts</h2>
			<p className={p}>Some features of the Service may require creating an account.</p>
			<p className={p}>When creating an account, you may be asked to provide:</p>
			<ul className={ul}>
				<li className={p}>email address</li>
				<li className={p}>username</li>
			</ul>
			<p className={p}>
				You are responsible for maintaining the confidentiality of your account information and for all
				activities that occur under your account.
			</p>

			<h2 className={h2}>3. User Content</h2>
			<p className={p}>Users may submit or store information through the Service.</p>
			<p className={p}>
				You retain ownership of your content, but you grant TVault a limited license to use, store, and process
				such content solely for the purpose of operating and improving the Service.
			</p>
			<p className={p}>
				You are responsible for ensuring that your content does not violate any laws or third-party rights.
			</p>

			<h2 className={h2}>4. Analytics and Data Collection</h2>
			<p className={p}>The website uses analytics tools to improve the Service, including:</p>
			<ul className={ul}>
				<li className={p}>Google Analytics</li>
				<li className={p}>Yandex Metrica</li>
			</ul>
			<p className={p}>
				These services may collect anonymized usage data such as page visits, session duration, and device
				information.
			</p>
			<p className={p}>
				For more information, please refer to our{" "}
				<Link href="/privacy" className={linkClass}>
					Privacy Policy
				</Link>
				.
			</p>

			<h2 className={h2}>5. Intellectual Property</h2>
			<p className={p}>
				All materials, features, and functionality of the Service, including but not limited to software,
				design, text, graphics, and logos, are owned by TVault or its licensors and are protected by applicable
				intellectual property laws.
			</p>
			<p className={p}>
				You may not reproduce, distribute, modify, or create derivative works without prior written permission.
			</p>

			<h2 className={h2}>6. Disclaimer of Warranties</h2>
			<p className={p}>
				The Service is provided on an <strong>&quot;as is&quot;</strong> and{" "}
				<strong>&quot;as available&quot;</strong> basis.
			</p>
			<p className={p}>
				TVault makes no warranties or representations regarding the reliability, availability, or accuracy of
				the Service.
			</p>
			<p className={p}>Use of the Service is at your own risk.</p>

			<h2 className={h2}>7. Limitation of Liability</h2>
			<p className={p}>
				To the maximum extent permitted by law, TVault shall not be liable for any indirect, incidental, or
				consequential damages resulting from:
			</p>
			<ul className={ul}>
				<li className={p}>the use or inability to use the Service</li>
				<li className={p}>unauthorized access to user data</li>
				<li className={p}>interruptions or errors in the Service</li>
			</ul>

			<h2 className={h2}>8. Termination</h2>
			<p className={p}>
				We may suspend or terminate your access to the Service at any time if you violate these Terms or if
				required by law.
			</p>
			<p className={p}>You may stop using the Service at any time.</p>

			<h2 className={h2}>9. Changes to These Terms</h2>
			<p className={p}>
				We reserve the right to update or modify these Terms at any time. Updated Terms will be posted on this
				page with a revised &quot;Last updated&quot; date.
			</p>
			<p className={p}>Continued use of the Service after changes means you accept the updated Terms.</p>

			<h2 className={h2}>10. Contact Information</h2>
			<p className={p}>If you have questions about these Terms, please contact us:</p>
			<p className={cn("mt-2", p)}>
				Email:{" "}
				<a href="mailto:privacy@tvault.app" className={linkClass}>
					privacy@tvault.app
				</a>
			</p>
		</Fragment>
	);
}

function TermsContentRu() {
	return (
		<Fragment>
			<p className={cn("mt-4 text-black/60", p)}>Дата последнего обновления: 14 марта 2026 года</p>
			<p className={cn("mt-6", p)}>
				Настоящее Пользовательское соглашение регулирует использование сайта и сервиса TVault, расположенного по
				адресу https://tvault.app (далее — «Сервис»).
			</p>
			<p className={cn("mt-3", p)}>
				Используя Сервис, пользователь подтверждает, что ознакомился с условиями данного соглашения и принимает
				их.
			</p>
			<p className={cn("mt-2", p)}>
				Если пользователь не согласен с условиями соглашения, он должен прекратить использование сайта.
			</p>

			<h2 className={h2}>1. Использование сервиса</h2>
			<p className={p}>
				Пользователь обязуется использовать Сервис только в законных целях и в соответствии с действующим
				законодательством.
			</p>
			<p className={p}>Пользователь не имеет права:</p>
			<ul className={ul}>
				<li className={p}>использовать сервис для незаконной деятельности</li>
				<li className={p}>предпринимать попытки несанкционированного доступа к системам сервиса</li>
				<li className={p}>вмешиваться в работу сайта</li>
				<li className={p}>использовать автоматизированные средства, способные нарушить работу сервиса</li>
			</ul>
			<p className={p}>
				Администрация сайта вправе ограничить или прекратить доступ пользователя к сервису при нарушении условий
				соглашения.
			</p>

			<h2 className={h2}>2. Учетные записи пользователей</h2>
			<p className={p}>Для использования некоторых функций сервиса пользователь может создать учетную запись.</p>
			<p className={p}>При регистрации могут запрашиваться:</p>
			<ul className={ul}>
				<li className={p}>адрес электронной почты</li>
				<li className={p}>имя пользователя (username)</li>
			</ul>
			<p className={p}>
				Пользователь несет ответственность за сохранность данных своей учетной записи и за действия, совершаемые
				с использованием аккаунта.
			</p>

			<h2 className={h2}>3. Пользовательский контент</h2>
			<p className={p}>Пользователь может размещать или хранить информацию в рамках использования сервиса.</p>
			<p className={p}>
				Пользователь сохраняет права на свой контент, однако предоставляет администрации сайта право
				использовать и обрабатывать данный контент исключительно для функционирования и улучшения сервиса.
			</p>
			<p className={p}>Пользователь несет ответственность за законность размещаемой информации.</p>

			<h2 className={h2}>4. Сбор аналитических данных</h2>
			<p className={p}>На сайте используются системы веб-аналитики, включая:</p>
			<ul className={ul}>
				<li className={p}>Google Analytics</li>
				<li className={p}>Яндекс Метрика</li>
			</ul>
			<p className={p}>Эти сервисы могут собирать обезличенную информацию о посещениях сайта, включая:</p>
			<ul className={ul}>
				<li className={p}>посещенные страницы</li>
				<li className={p}>продолжительность сессии</li>
				<li className={p}>данные устройства и браузера</li>
			</ul>
			<p className={p}>
				Подробнее об обработке данных указано в{" "}
				<Link href="/privacy" className={linkClass}>
					Политике конфиденциальности
				</Link>
				.
			</p>

			<h2 className={h2}>5. Интеллектуальная собственность</h2>
			<p className={p}>
				Все элементы сервиса, включая программное обеспечение, дизайн, тексты, графику и логотипы, являются
				объектами интеллектуальной собственности и защищены законодательством.
			</p>
			<p className={p}>
				Запрещается копирование, распространение или использование материалов сайта без письменного разрешения
				правообладателя.
			</p>

			<h2 className={h2}>6. Ограничение ответственности</h2>
			<p className={p}>
				Сервис предоставляется на условиях <strong>«как есть»</strong>.
			</p>
			<p className={p}>
				Администрация сайта не гарантирует бесперебойную или безошибочную работу сервиса и не несет
				ответственности за возможные убытки, возникшие в результате использования сайта.
			</p>

			<h2 className={h2}>7. Прекращение доступа</h2>
			<p className={p}>
				Администрация сайта имеет право ограничить или прекратить доступ пользователя к сервису при нарушении
				условий настоящего соглашения или требований законодательства.
			</p>
			<p className={p}>Пользователь может прекратить использование сервиса в любое время.</p>

			<h2 className={h2}>8. Изменение условий соглашения</h2>
			<p className={p}>Администрация сайта имеет право вносить изменения в настоящее соглашение.</p>
			<p className={p}>Актуальная версия соглашения всегда размещается на данной странице.</p>
			<p className={p}>
				Продолжение использования сервиса после изменения условий означает согласие пользователя с обновленными
				условиями.
			</p>

			<h2 className={h2}>9. Контактная информация</h2>
			<p className={p}>По всем вопросам, связанным с использованием сервиса, можно связаться с нами:</p>
			<p className={cn("mt-2", p)}>
				Email:{" "}
				<a href="mailto:privacy@tvault.app" className={linkClass}>
					privacy@tvault.app
				</a>
			</p>
		</Fragment>
	);
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
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
							{isEn ? "Terms of Service" : "Пользовательское соглашение"}
						</h1>
						{isEn ? <TermsContentEn /> : <TermsContentRu />}
					</div>
				</section>
			</main>
			<LayoutFooter />
		</Fragment>
	);
}
