import { WebPSource } from "@constants";
import { AvatarView, AvatarViewSize, TextView, TextViewTag } from "@components/common/data";
import { useAppDispatch, useAppSelector } from "@hooks";
import { authenticationActions, selectAccount } from "@domain/store/slices";
import { ButtonView } from "@components/common/input";
import "./profile.view.scss";

export const ProfileView = () => {
	const dispatch = useAppDispatch();

	const account = useAppSelector(selectAccount);

	return (
		<div className="profile-form">
			<div className="profile-form__header">
				<AvatarView
					source={WebPSource.Placeholder}
					size={AvatarViewSize.Large}
				/>
				<div className="profile-form__name">
					<TextView
						content={account.displayName}
						tag={TextViewTag.Header_3}
					/>
					<TextView
						content={account.email}
						tag={TextViewTag.Paragraph}
					/>
				</div>
			</div>
			<ButtonView
				label="Sign out"
				isStretched={true}
				onClick={() => dispatch(authenticationActions.signOut())}
			/>
		</div>
	);
};