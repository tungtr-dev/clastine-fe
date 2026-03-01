import axios from "axios";
import { IAuthenticationService } from "./authentication.service.interface.ts";
import { BaseURL } from "../api-url.enum.ts";
import { IRegisterPayloadDTO, IUserDTO } from "@dtos";

export const authenticationService: IAuthenticationService = {
	register: async (request: IRegisterPayloadDTO) => {
		const response = await axios.post(BaseURL.Users, request);

		return response.data as IUserDTO;
	}
};