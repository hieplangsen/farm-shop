import { IDataError } from "@/helper/apiErrorService";
import { getApi } from "@/helper/apiHelper";
import { IProductResponse } from "./interface";



export const getAllProductApi = async () => {
	const response = await getApi<IProductResponse[] | IDataError>("product");
	console.log(response, "2response")
	return response;
};

export const getProductApi = async (id: string) => {
	const response = await getApi<IProductResponse | IDataError>(`product/${id}`);
	return response;
};