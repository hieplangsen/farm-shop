<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { IProfileResponse } from "@/api/user/interface";
import Dropdown from "@/components/dropdown/Dropdown.vue";
import { removeAccessToken } from "@/composables/useLocalStorage";
import router from "@/helper/router";

const authStore = useUserStore();
const info = ref<IProfileResponse>();
const isShowDropDown = ref(false);
const getProfile = async () => {
	const response = await authStore.getProfile();
	if (response) {
		info.value = response;
	}
};

const toggleDropDown = () => {
	isShowDropDown.value = !isShowDropDown.value;
};

const logout = () => {
	removeAccessToken();
	window.location.href = "./login";
};

getProfile();
</script>
<template>
	<div class="header bg-primary flex justify-between items-center px-4">
		<div>Logo</div>
		<div class="flex items-center gap-2 font-semibold">
			<Dropdown :isShowDropDown="isShowDropDown" :toggleDropDown="toggleDropDown" :position="'bottom'" width="200px">
				<template #triggerButton>
					<div class="bg-white h-10 w-10 rounded-full">
						<img class="max-w-full max-h-full rounded-full" :src="info?.avatar" alt="avt" />
					</div>
				</template>
				<template #content>
					<div class="flex flex-col p-1 gap-2 items-center">
						<div class="cursor-pointer bg-hover w-full px-4 py-3 rounded-md">{{ info?.fullName }}</div>
						<div class="flex items-center bg-hover justify-between px-4 py-3 rounded-md cursor-pointer w-full text-center">
							<div>Setting</div>
							<div><img class="w-4" src="../assets/svg/arrowRight.svg" alt="" /></div>
						</div>
						<div class="flex items-center bg-hover justify-between px-4 py-3 rounded-md cursor-pointer w-full text-center" @click="logout">
							<div>Logout</div>
							<div><img class="w-4" src="../assets/svg/arrowRight.svg" alt="" /></div>
						</div>
					</div>
				</template>
			</Dropdown>
		</div>
	</div>
</template>
<style scoped>
.header {
	height: 56px;
	width: 100%;
	background: rgb(253, 203, 203);
}

.bg-hover:hover {
	background: red;
}
</style>
