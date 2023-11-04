<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
import {removeAccessToken} from "@/composables/useLocalStorage"

onMounted(async () => {
	try {
		if (typeof userStore.getProfile() === "function") {
			userStore.getProfile();
		}
	} catch (e) {
		console.log("1");
	}
});

const logoutBtn = () => {
	removeAccessToken()
	router.push('/login')
}

</script>

<template>
	<div className="h-[80px] border-b flex justify-between px-5 items-center">
		<div @click="router.push('/home')" className="cursor-pointer h-full flex flex-col items-center justify-center">
			<img className="h-10 w-10" src="@/assets/img/logo.png" alt="" />
			<div className="text-primary font-semibold">FARMTRADE</div>
		</div>
		<div className="h-10 border-2 rounded-3xl border-[#b8b8b8] flex p-2 gap-2">
			<img src="@/assets/svg/search.svg" />
			<input className="outline-none" placeholder="Tìm kiếm sản phẩm..." type="text" />
			<img src="@/assets/svg/micro.svg" />
		</div>
		<div className="h-full flex items-center text-primary gap-6">
			<div className="h-[40px] flex items-center gap-1">
				<img className="max-h-[40px] w-[30px]" src="@/assets/svg/user.svg" alt="" />
				<div className="flex flex-col items-center">
					<div v-if="userStore && userStore.userCurrent && Object.keys(userStore.userCurrent).length" className="cursor-pointer hover:underline" @click="logoutBtn">
						{{ userStore.userCurrent.email }}
					</div>
					<div v-else @click="router.push('/login')" className="cursor-pointer">Đăng nhập/ Đăng ký</div>

					<div v-if="userStore && userStore.userCurrent && Object.keys(userStore.userCurrent).length" className="cursor-pointer hover:underline"> {{userStore.userCurrent.token}} coin</div>
				</div>
			</div>
			<div className="cursor-pointer hover:underline h-[40px] flex items-center gap-1">
				<img className="max-h-[40px]" src="@/assets/svg/cart.svg" alt="" />
				<div className="">Giỏ hàng</div>
			</div>
		</div>
	</div>
</template>
