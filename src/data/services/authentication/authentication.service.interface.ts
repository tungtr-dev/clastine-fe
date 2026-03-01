import { IUserDTO } from "@dtos";
import { IRegisterPayloadDTO } from "data/dtos/authentication.dto.interface.ts";

export interface IAuthenticationService {
	register: (payload: IRegisterPayloadDTO) => Promise<IUserDTO>;
}