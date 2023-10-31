import { getApi, postApi } from "@/helper/apiHelper";
import { ISignUpInRequest, ISignInRequest, ISignInResponse, IProfileResponse } from "./interface";
import { IDataError } from "@/helper/apiErrorService";

export const signInApi = async (payload: ISignInRequest) => {
	const response = await postApi<ISignInRequest, ISignInResponse | IDataError>("auth/login", payload);
	return response;
};

export const getProfileApi = async () => {
	const response = await getApi<IProfileResponse | IDataError>("users/profile");
	return response;
};

export const signUpApi = async (payload: ISignUpInRequest) => {
	const response = await postApi<ISignUpInRequest, ISignInResponse | IDataError>("users", payload);
	return response;
};
