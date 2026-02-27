export interface IAuthenticationService {
	register: (request: IAuthenticationRegisterRequest) => Promise<IAuthenticationRegisterResponse>;
}

export interface IAuthenticationRegisterRequest {
	email: string;
	displayName: string;
	password: string;
}

export interface IAuthenticationRegisterResponse {
	id: string;
	email: string;
	displayName: string;
	token: string;
}