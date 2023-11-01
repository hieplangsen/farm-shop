import { IDataError } from "@/helper/apiErrorService";
import { getApi, postApi, putApi } from "@/helper/apiHelper";

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
	const response = await getApi<IRateResponse[] | IDataError>("rate?status=pending");
	return response;
};

export const getRateSuccessApi = async () => {
	const response = await getApi<IRateResponse[] | IDataError>("rate?status=accept");
	return response;
};

export const getRateRejectApi = async () => {
	const response = await getApi<IRateResponse[] | IDataError>("rate?status=reject");
	return response;
};

export const updateRateApi = async (rate: IRateRequest) => {
	const response = await putApi<IRateRequest, IRateResponse | IDataError>("rate", rate);
	return response;
};
