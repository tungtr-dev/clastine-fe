import { ModalOverlayView } from "@components/common/overlay";
import { ModalID } from "@constants";
import { useAppSelector, useAppDispatch } from "@hooks";
import { selectModal, modalActions } from "@store/slices";
import { useState } from "react";
import { AccountFormId } from "./constants/account-form.id.enum.ts";
import { AccountModalContext } from "./utilities/contexts/account.modal.context.interface.ts";
import { AccountFormView, AccountModalTitle } from "./constants/account.modal.const.ts";
import "./account.modal.view.scss";

export const AccountModalView = () => {
	const isOpen = useAppSelector(selectModal(ModalID.Account));

	const dispatch = useAppDispatch();

	const [form, setForm] = useState<AccountFormId>(AccountFormId.Register);

	const Form = AccountFormView[form];

	return (
		<ModalOverlayView
			className="account-modal"
			header={AccountModalTitle[form]}
			isOpen={isOpen}
			close={() => dispatch(modalActions.close(ModalID.Account))}
		>
			<AccountModalContext value={{ setForm }}>
				<Form />
			</AccountModalContext>
		</ModalOverlayView>
	);
};