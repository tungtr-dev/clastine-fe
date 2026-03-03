import { Environment } from "@constants";

export const BaseURL = {
	Users: `${Environment.ServerURI}/api/users`
} as const;

export const UserURL = {
	Email: `${BaseURL.Users}/email`,
	SignIn: `${BaseURL.Users}/sign-in`
} as const;