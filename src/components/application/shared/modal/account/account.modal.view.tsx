import { ModalOverlayView } from "@components/common/overlay";
import { ModalID } from "@constants";
import { selectModal, selectAccount, modalActions } from "@domain/store/slices";
import { useAppSelector, useAppDispatch } from "@hooks";
import { useState } from "react";
import { ProfileView } from "./components/profile/profile.view.tsx";
import { AccountContentID } from "./constants/account-content-id.enum.ts";
import { AccountFormView, AccountModalTitle } from "./constants/account.modal.const.ts";
import { AccountModalContext } from "./utilities/contexts/account.modal.context.interface.ts";
import "./account.modal.view.scss";

export const AccountModalView = () => {
	const isOpen = useAppSelector(selectModal(ModalID.Account));

	const dispatch = useAppDispatch();

	const account = useAppSelector(selectAccount);

	const [contentID, setContentID] = useState<AccountContentID>(AccountContentID.SignInForm);

	const Form = account.token ? ProfileView : AccountFormView[contentID];

	const title = AccountModalTitle[account.token ? AccountContentID.Profile : contentID];

	return (
		<ModalOverlayView
			className="account-modal"
			header={title}
			isOpen={isOpen}
			close={() => dispatch(modalActions.close(ModalID.Account))}
		>
			<AccountModalContext value={{ setForm: setContentID }}>
				<Form />
			</AccountModalContext>
		</ModalOverlayView>
	);
};