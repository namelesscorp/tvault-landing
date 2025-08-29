interface Window {
	gtag: (
		command: string,
		action: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		params?: Record<string, any>,
	) => void;
}
