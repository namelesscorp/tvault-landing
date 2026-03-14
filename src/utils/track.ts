/** Yandex Metrika counter ID (NEXT_PUBLIC_YANDEX_METRIKA_ID in .env) */
const YM_COUNTER_ID = typeof process !== "undefined" ? Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID) : NaN;

/**
 * Sends event to Google Analytics and Yandex Metrika.
 * @param eventName — event name (GA: event name, YM: reachGoal)
 * @param params — optional params for GA (YM gets composite goal from eventName + params)
 */
export function track(eventName: string, params?: Record<string, string>): void {
	window.gtag?.("event", eventName, params);

	const ymGoal =
		params?.platform && params?.location ? `${eventName}_${params.platform}_${params.location}` : eventName;
	if (!Number.isNaN(YM_COUNTER_ID)) {
		window.ym?.(YM_COUNTER_ID, "reachGoal", ymGoal);
	}
}
