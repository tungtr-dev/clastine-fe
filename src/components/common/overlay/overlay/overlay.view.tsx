import { AnimationEventHandler, useState } from "react";
import { IOverlayViewPrivateProps } from "./overlay.view.interface.ts";
import { generateClassModifiers } from "@functions";
import "./overlay.view.scss";

export const OverlayView = ({
	children,
	className,
	viewClassName,
	isOpen: isOpenProp,
	disclosureActions: { close }
}: IOverlayViewPrivateProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const classModifiers = generateClassModifiers("overlay", [
		{ modifier: "close", evaluate: () => !isOpenProp }
	]);

	const onAnimationEnd: AnimationEventHandler = event => {
		if (event.animationName === "overlay-close") {
			setIsOpen(false);
		}
	};

	if (isOpenProp && !isOpen) {
		setIsOpen(true);
	}

	return (<>
		{isOpen &&
			<div
				className={`overlay ${className} ${viewClassName} ${classModifiers}`}
				onClick={close}
				onAnimationEnd={onAnimationEnd}
			>
				{children}
			</div>
		}
	</>);
};