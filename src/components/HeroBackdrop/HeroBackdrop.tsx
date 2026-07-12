import { ImgIcon } from "../ImgIcon";

const chips = [
	{ icon: "lock.svg", left: "6%", top: "62%", delay: "0s", duration: "16s" },
	{ icon: "key.svg", left: "14%", top: "28%", delay: "3.5s", duration: "19s" },
	{ icon: "shield.svg", left: "3%", top: "18%", delay: "7s", duration: "17s" },
	{ icon: "database.svg", left: "20%", top: "78%", delay: "5s", duration: "21s" },
	{ icon: "eye.svg", left: "88%", top: "24%", delay: "1.5s", duration: "18s" },
	{ icon: "lock.svg", left: "94%", top: "58%", delay: "6s", duration: "20s" },
	{ icon: "check_circle.svg", left: "80%", top: "76%", delay: "9s", duration: "17s" },
	{ icon: "zap.svg", left: "77%", top: "12%", delay: "11s", duration: "22s" },
];

const HeroBackdrop = () => (
	<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<span className="hero-aurora hero-aurora-1" />
		<span className="hero-aurora hero-aurora-2" />
		<span className="hero-sweep" />

		{chips.map((chip, index) => (
			<span
				key={`${chip.icon}-${index}`}
				className="hero-chip hidden lg:flex"
				style={{
					left: chip.left,
					top: chip.top,
					animationDelay: chip.delay,
					animationDuration: chip.duration,
				}}>
				<ImgIcon icon={chip.icon} color="#3A73ED" width={16} height={16} />
			</span>
		))}
	</div>
);

export { HeroBackdrop };
