export interface ISignInRequest {
	email: string;
	password: string;
}

export interface ISignInResponse {
	accessToken: string;
}

export interface ISignUpInRequest {
	fullName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface IProfileResponse {
	fullName: string;
	email: string;
	avatar: string;
	role: string;
	token: number;
}