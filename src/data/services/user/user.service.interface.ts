import { IUserDTO } from "data/dtos/user.dto.interface.ts";

export interface IUserService {
	getUserByEmail: (email: string) => Promise<IUserDTO | null>;
}