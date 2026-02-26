import { TextView, TextViewTag } from "@components/common/data";
import { InputFieldView, InputType, ButtonView, ButtonType } from "@components/common/input";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterFormInput } from "../account.modal.view.interface.ts";
import { AccountFormId } from "../constants/account-form.id.enum.ts";
import { AccountModalContext } from "../utilities/contexts/account.modal.context.interface.ts";

export const RegisterFormView = () => {
	const { setForm } = useContext(AccountModalContext);

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IRegisterFormInput>();

	const onSubmit: SubmitHandler<IRegisterFormInput> = data => {
		console.log(data);
	};

	return (<>
		<TextView
			className="account-modal__subtitle"
			content={[
				{
					content: "Already have an account? "
				},
				{
					content: "Sign in.",
					onClick: () => setForm(AccountFormId.SignIn)
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
					label="Register"
					type={ButtonType.Submit}
				/>
			</div>
		</form>
	</>);
};