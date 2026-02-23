import { OverlayView } from "../overlay/overlay.view.tsx";
import { IModalOverlayViewProps } from "./modal.view.interface.ts";
import { ModalView } from "./modal.view.tsx";
import "./modal.view.scss";

export const ModalOverlayView = ({
	children,
	className,
	header,
	isOpen,
	close
}: IModalOverlayViewProps) => {
	return (
		<OverlayView
			className={className}
			viewClassName="modal-overlay"
			isOpen={isOpen}
			close={close}
		>
			<ModalView
				header={header}
				close={close}
			>
				{children}
			</ModalView>
		</OverlayView>
	)
};