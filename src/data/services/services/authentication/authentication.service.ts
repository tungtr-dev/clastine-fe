import axios from "axios";
import { IAuthenticationRegisterRequest, IAuthenticationRegisterResponse, IAuthenticationService } from "./authentication.service.interface.ts";
import { API_URL } from "data/services/constants/api-url.enum.ts";

export const authenticationService: IAuthenticationService = {
	register: async (request: IAuthenticationRegisterRequest) => {
		const response = await axios.post(API_URL.Users, request);

		return response.data as IAuthenticationRegisterResponse;
	}
};