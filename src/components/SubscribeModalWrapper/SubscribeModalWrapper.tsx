"use client";

import { Fragment, useState } from "react";

import { ButtonTransparent } from "../ButtonTransparent";
import { SubscribeModal } from "../SubscribeModal";

const SubscribeModalWrapper = ({
	buttonText,
	className,
	eventName,
}: {
	buttonText: string;
	className?: string;
	eventName?: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Fragment>
			<ButtonTransparent className={className} eventName={eventName} onClick={() => setIsOpen(true)}>
				{buttonText}
			</ButtonTransparent>
			{isOpen && <SubscribeModal onClose={() => setIsOpen(false)} />}
		</Fragment>
	);
};

export { SubscribeModalWrapper };
