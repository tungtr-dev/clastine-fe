import { ButtonView } from "@components/common/input";
import { ModalOverlayView } from "@components/common/overlay";
import { ModalID } from "@constants";
import { useAppDispatch, useAppSelector } from "@hooks";
import { modalActions, selectModal } from "@store";

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
			<ButtonView
				label="Sign in with Google"
				isStretched={true}
			/>
		</ModalOverlayView>
	);
};