import { IUserDTO } from "@domain/dtos";

export interface IUserService {
	getUserByEmail: (email: string) => Promise<IUserDTO | null>;
}