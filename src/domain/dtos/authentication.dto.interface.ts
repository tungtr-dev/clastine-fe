export interface IRegisterPayloadDTO {
	email: string;
	displayName: string;
	password: string;
}

export interface ISignInPayloadDTO {
	email: string;
	password: string;
}