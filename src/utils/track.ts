/**
 * Sends event to Google Analytics and Yandex Metrika.
 * @param eventName — event name (GA: event name, YM: reachGoal)
 * @param params — optional params for GA (YM gets composite goal from eventName + params)
 */
export function track(eventName: string, params?: Record<string, string>): void {
	window.gtag?.("event", eventName, params);

	const ymGoal =
		params?.platform && params?.location ? `${eventName}_${params.platform}_${params.location}` : eventName;
	if (process.env.YANDEX_METRIKA_ID) {
		window.ym?.(Number(process.env.YANDEX_METRIKA_ID), "reachGoal", ymGoal);
	}
}
