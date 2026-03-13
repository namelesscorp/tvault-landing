import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_IDS;

interface SubscribePayload {
	[key: string]: unknown;
}

const buildMessage = (payload: SubscribePayload) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const entries = Object.entries(payload).filter(
		([_, value]) => value !== undefined && value !== null && value !== "",
	);

	const lines = ["Новая заявка", "", ...entries.map(([key, value]) => `${key}: ${String(value)}`)];

	return lines.join("\n");
};

export async function POST(request: Request) {
	if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_IDS) {
		console.error("Telegram env variables are not set");
		return NextResponse.json({ error: "Subscription service is not configured" }, { status: 500 });
	}

	let payload: SubscribePayload;

	try {
		payload = await request.json();
	} catch {
		return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
	}

	const message = buildMessage(payload);
	const chatIds = TELEGRAM_CHAT_IDS.split(",")
		.map(id => id.trim())
		.filter(Boolean);

	if (chatIds.length === 0) {
		console.error("No valid Telegram chat ids provided");
		return NextResponse.json({ error: "Subscription service is not configured" }, { status: 500 });
	}

	const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

	try {
		const responses = await Promise.all(
			chatIds.map(chatId =>
				fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						chat_id: chatId,
						text: message,
						parse_mode: "HTML",
					}),
				}),
			),
		);

		const hasError = responses.some(response => !response.ok);

		if (hasError) {
			console.error("Failed to send Telegram message");
			return NextResponse.json({ error: "Failed to send subscription" }, { status: 500 });
		}

		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("Error while sending Telegram message", error);
		return NextResponse.json({ error: "Failed to send subscription" }, { status: 500 });
	}
}
