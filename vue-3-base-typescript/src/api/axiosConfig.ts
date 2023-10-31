import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
// import { getTime } from "date-fns";
import { toast, type ToastOptions } from "vue3-toastify";
import { getAccessToken, removeAccessToken } from "@/composables/useLocalStorage";
import { IDecodeToken } from "./interface";
import jwtDecode from "jwt-decode";
import { apiServer } from "@/helper/config";

const axiosConfig = axios.create({
	baseURL: `${apiServer}/api/v1/`,
	headers: {
		"Content-Type": "application/json"
	}
});

axiosConfig.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const accessToken = getAccessToken();
		if (accessToken) {
			if (config && config.headers) {
				config.headers.Authorization = `Bearer ${accessToken}`;
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);

axiosConfig.interceptors.response.use(
	(res: AxiosResponse) => res,
	async (err) => {
		const accessToken = getAccessToken();
		if (err.response && err.response.status === 401 && accessToken) {
			toast("Please login!", {
				autoClose: 3000,
				position: toast.POSITION.TOP_RIGHT,
				type: "error"
			} as ToastOptions);
			removeAccessToken();
			setTimeout(() => {
				window.location.href = "./login";
			}, 3000);
		}

		return Promise.reject(err);
	}
);

axiosConfig.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error) => Promise.reject(error)
);

export default axiosConfig;
