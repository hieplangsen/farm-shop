import { defineStore } from "pinia";
import { getProfileApi, signInApi, signUpApi } from "@/api/user/userApi";
import { IProfileResponse, ISignInRequest, ISignInResponse, ISignUpInRequest } from "@/api/user/interface";
import { IDataError, instanceOfDataError } from "@/helper/apiErrorService";
import { decodeAccessToken, removeAccessToken, setAccessToken } from "@/composables/useLocalStorage";
import { toast } from "vue3-toastify";
import { IResponse } from "@/helper/apiHelper";

export const useUserStore = defineStore("user", {
	state: () => ({
		userCurrent: { email: "", role: "", token: 0 }
	}),

	actions: {
		async login(data: ISignInRequest) {
			const response = await signInApi(data);
			return this.authHandle(response);
		},

		async register(data: ISignUpInRequest) {
			const response = await signUpApi(data);
			return this.authHandle(response);
		},

		async getProfile() {
			const response = await getProfileApi();
			this.userCurrent = response.data as IProfileResponse;
			return response.data as IProfileResponse;
		},

		authHandle(response: IResponse<ISignInResponse | IDataError>) {
			if (instanceOfDataError(response)) {
				toast.error(response.error || "error");
				return response.error;
			}
			setAccessToken((response.data as ISignInResponse).accessToken);
			// const decodeToken = decodeAccessToken();
			// this.userCurrent = decodeToken?.email || "";
			return response.data as ISignInResponse;
		}
	}
});
