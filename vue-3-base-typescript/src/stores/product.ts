import { defineStore } from "pinia";
import { getAllProductApi, getProductApi } from "@/api/product/productApi";

export const useProductStore = defineStore("product", {
	state: () => ({}),

	actions: {
		// async getProduct(id: string) {
		// 	const response = await getProductApi(id);
		// 	if (response) {
		// 		return response.data;
		// 	}
		// 	return response;
		// },
		// async getAllProduct() {
		// 	const response = await getAllProductApi();
		// 	return response.data;
		// }
	}
});
