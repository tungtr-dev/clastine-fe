import { TextView, TextViewTag } from "@components/common/data";
import { InputFieldView, InputType, ButtonView, ButtonType } from "@components/common/input";
import { userService } from "@domain/services";
import { authenticationThunk } from "@domain/store/thunks";
import { useAppDispatch } from "@hooks";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterFormInput } from "../../account.modal.view.interface.ts";
import { AccountContentID } from "../../constants/account-content-id.enum.ts";
import { AccountModalContext } from "../../utilities/contexts/account.modal.context.interface.ts";

export const RegisterFormView = () => {
	const dispatch = useAppDispatch();

	const { setForm } = useContext(AccountModalContext);

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IRegisterFormInput>({
		reValidateMode: "onSubmit"
	});

	const onSubmit: SubmitHandler<IRegisterFormInput> = input => {
		dispatch(authenticationThunk.register(input));
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
					onClick: () => setForm(AccountContentID.SignInForm)
				}
			]}
			tag={TextViewTag.Paragraph}
		/>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="account-modal__content">
				<InputFieldView
					registry={register("email", {
						required: "Email address is required",
						validate: async email => {
							try {
								const user = await userService.getUserByEmail(email);

								return !user || "A user with this email already exists";
							} catch (error) {
								console.log(error);

								return "Error!"
							}
						}
					})}
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
					registry={register("password", {
						required: "Password is required",
						minLength: {
							value: 6,
							message: "Password length must be at least 6"
						}
					})}
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