const SERVER = "http://localhost:5000"

export enum BaseURL {
	Users = `${SERVER}/api/users`
}

export enum UserURL {
	Email = `${BaseURL.Users}/email`
}