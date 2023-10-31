import { IDataError } from "@/helper/apiErrorService";
import { getApi, postApi } from "@/helper/apiHelper";

export interface IRateRequest {
	text: string;
	file: string;
	user: string;
	idProduct: string;
	status: string;
}

export interface IRateResponse {
	_id: string;
	text: string;
	file: string;
	user: string;
	idProduct: string;
	status: string;
}

export const postRateApi = async (rate: IRateRequest) => {
	const response = await postApi<IRateRequest, IRateResponse | IDataError>("rate", rate);
	return response;
};

export const getRatePendingApi = async () => {
	const response = await getApi<IRateResponse[] | IDataError>("rate?state=pending");
	return response;
};

export const getRateSuccessApi = async () => {
	const response = await getApi<IRateResponse[] | IDataError>("rate?state=accept");
	return response;
};