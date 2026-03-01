import { IRegisterPayloadDTO, IUserDTO } from "@domain/dtos";

export interface IAuthenticationService {
	register: (payload: IRegisterPayloadDTO) => Promise<IUserDTO>;
}