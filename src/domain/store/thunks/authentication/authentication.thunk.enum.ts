export enum AuthenticationThunkAction {
	Register = "authentication/register",
	SignIn = "authentication/sign-in",
	SignOut = "authentication/sign-out"
}

export enum AuthenticationThunkRejectReason {
	UserExists,
	SignInFailed
}