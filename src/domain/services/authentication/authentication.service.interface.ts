import { IRegisterPayloadDTO, ISignInPayloadDTO, IUserDTO } from "@domain/dtos";

export interface IAuthenticationService {
	register: (payload: IRegisterPayloadDTO) => Promise<IUserDTO>;
	signIn: (payload: ISignInPayloadDTO) => Promise<IUserDTO>;
}