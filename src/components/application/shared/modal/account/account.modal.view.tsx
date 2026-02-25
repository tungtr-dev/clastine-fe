import { InputFieldView } from "@components/common/input";
import { ModalOverlayView } from "@components/common/overlay";
import { ModalID } from "@constants";
import { useAppDispatch, useAppSelector } from "@hooks";
import { modalActions, selectModal } from "@store";
import "./account.modal.view.scss";
import { InputFieldType } from "components/common/input/input-field/enums/input-field.view.enum.ts";

export const AccountModalView = () => {
	const isOpen = useAppSelector(selectModal(ModalID.Account));

	const dispatch = useAppDispatch();

	return (
		<ModalOverlayView
			className="account-modal"
			header="Account"
			isOpen={isOpen}
			close={() => dispatch(modalActions.close(ModalID.Account))}
		>
			<div className="account-modal__content">
				<InputFieldView
					name="email"
					label="Email"
					description="Your email here"
				/>
				<InputFieldView
					name="password"
					label="Password"
					description="Your password here"
					type={InputFieldType.Password}
					error="This is not an email bro"
				/>
			</div>
		</ModalOverlayView>
	);
};