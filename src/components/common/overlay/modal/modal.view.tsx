import { TextView, TextViewType } from "@components/common/data";
import { IModalViewProps } from "./modal.view.interface.ts";
import { ButtonView, ButtonViewVariant } from "@components/common/input";
import { SVGSource } from "@constants";

export const ModalView = ({
	children,
	header,
	close
}: IModalViewProps) => {
	return (
		<div
			className="modal"
			onClick={event => event.stopPropagation()}
		>
			<div className="modal__header">
				<TextView
					content={header}
					type={TextViewType.Header_3}
				/>
				<ButtonView
					label=""
					icon={SVGSource.Close}
					variant={ButtonViewVariant.Subtle}
					isCompact={true}
					onClick={close}
				/>
			</div>
			{children}
		</div>
	);
};