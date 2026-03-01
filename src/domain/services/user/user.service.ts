import axios from "axios";
import { IUserService } from "./user.service.interface.ts";
import { UserURL } from "../api-url.enum.ts";
import { IUserDTO } from "@domain/dtos";

export const userService: IUserService = {
	getUserByEmail: async (email): Promise<IUserDTO | null> => {
		try {
			const response = await axios.get(`${UserURL.Email}/${email}`);

			return response.data as IUserDTO;
		} catch {
			return null;
		}
	}
};