import { TextView, TextViewTag } from "@components/common/data";
import { InputFieldView, InputType, ButtonView, ButtonType } from "@components/common/input";
import { authenticationThunk } from "@domain/store/thunks";
import { useAppDispatch } from "@hooks";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ISignInFormInput } from "../../account.modal.view.interface.ts";
import { AccountContentID } from "../../constants/account-content-id.enum.ts";
import { AccountModalContext } from "../../utilities/contexts/account.modal.context.interface.ts";

export const SignInFormView = () => {
	const dispatch = useAppDispatch();

	const { setForm } = useContext(AccountModalContext);
	
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<ISignInFormInput>({
		reValidateMode: "onSubmit"
	});

	const onSubmit: SubmitHandler<ISignInFormInput> = input => {
		dispatch(authenticationThunk.signIn(input));
	};

	return (<>
		<TextView
			className="account-modal__subtitle"
			content={[
				{
					content: "Don't have an account? "
				},
				{
					content: "Register an account.",
					onClick: () => setForm(AccountContentID.RegisterForm)
				}
			]}
			tag={TextViewTag.Paragraph}
		/>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="account-modal__content">
				<InputFieldView
					registry={register("email", { required: "Email address is required" })}
					label="Email"
					placeholder="youremail@domain.name"
					error={errors.email?.message}
				/>
				<InputFieldView
					registry={register("password", { required: "Password is required" })}
					label="Password"
					type={InputType.Password}
					error={errors.password?.message}
				/>
				<ButtonView
					label="Sign in"
					type={ButtonType.Submit}
				/>
			</div>
		</form>
	</>);
};