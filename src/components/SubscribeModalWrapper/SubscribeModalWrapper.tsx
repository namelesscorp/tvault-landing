"use client";

import { Fragment, useState } from "react";

import { ButtonTransparent } from "../ButtonTransparent";
import { SubscribeModal } from "../SubscribeModal";

const SubscribeModalWrapper = ({ buttonText, className }: { buttonText: string; className?: string }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Fragment>
			<ButtonTransparent className={className} onClick={() => setIsOpen(true)}>
				{buttonText}
			</ButtonTransparent>
			{isOpen && <SubscribeModal onClose={() => setIsOpen(false)} />}
		</Fragment>
	);
};

export { SubscribeModalWrapper };
