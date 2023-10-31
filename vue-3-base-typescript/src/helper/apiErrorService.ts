// @ts-nocheck
import { AxiosError, AxiosResponse } from "axios";

export interface IDataError {
	error?: string;
	Error?: string;
}

export const handleServiceError = (error: AxiosError | string): IDataError => {
	let message = "";
	if ((error as AxiosError).response) message = (error as AxiosError).response.data.message || (error as any).response.message || (error as AxiosError).response.data.error;
	if (!message) message = (error as string) || "Something wrong";
	return { error: message };
};

export function extractErrorMessage(error: AxiosError): string {
	if (error.response) {
		const errorMessage: undefined | string = error.response.data.message || error.response.data.error;
		if (errorMessage) {
			return `${errorMessage} (${error.response.status})`;
		} else if (error.response.status === 401 || error.response.status === 403) {
			return `Unauthorized! Please log in (${error.response.status})`;
		}
		return `Received error ${error.response.status}`;
	}
	return error.message || "Unknown error";
}

export const instanceOfDataError = (object: any): object is IDataError => "error" in object || "Error" in object;
