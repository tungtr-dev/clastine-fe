import { ButtonType, ButtonView, InputFieldView, InputType } from "@components/common/input";
import { ModalOverlayView } from "@components/common/overlay";
import { ModalID } from "@constants";
import { useAppDispatch, useAppSelector } from "@hooks";
import { modalActions, selectModal } from "@store";
import { useForm } from "react-hook-form";
import { ISignUpFormInput } from "./account.modal.view.interface.ts";
import "./account.modal.view.scss";

export const AccountModalView = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		clearErrors
	} = useForm<ISignUpFormInput>();

	const onSubmit = (data: object) => {
		console.log(data)
		clearErrors()
	};

	const isOpen = useAppSelector(selectModal(ModalID.Account));

	const dispatch = useAppDispatch();

	return (
		<ModalOverlayView
			className="account-modal"
			header="Sign Up"
			isOpen={isOpen}
			close={() => dispatch(modalActions.close(ModalID.Account))}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="account-modal__content">
					<InputFieldView
						registry={register("email", { required: "Email address is required" })}
						label="Email"
						placeholder="youremail@domain.name"
						error={errors.email?.message}
					/>
					<InputFieldView
						registry={register("displayName")}
						label="Display Name"
						placeholder="Your Name"
					/>
					<InputFieldView
						registry={register("password", { required: "Password is required" })}
						label="Password"
						type={InputType.Password}
						error={errors.password?.message}
					/>
					<ButtonView
						label="Sign Up"
						type={ButtonType.Submit}
					/>
				</div>
			</form>
		</ModalOverlayView>
	);
};