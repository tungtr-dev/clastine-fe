import axios from "axios";
import { IAuthenticationService } from "./authentication.service.interface.ts";
import { BaseURL, UserURL } from "../api-url.enum.ts";
import { IRegisterPayloadDTO, ISignInPayloadDTO, IUserDTO } from "@domain/dtos";

export const authenticationService: IAuthenticationService = {
	register: async (request: IRegisterPayloadDTO) => {
		const response = await axios.post(BaseURL.Users, request);

		return response.data as IUserDTO;
	},
	signIn: async (request: ISignInPayloadDTO) => {
		const response = await axios.post(UserURL.SignIn, request);

		return response.data as IUserDTO;
	}
};