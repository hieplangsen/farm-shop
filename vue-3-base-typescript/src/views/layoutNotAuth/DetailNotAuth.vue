<script setup lang="ts">
import { getProductApi } from "@/api/product/productApi";
import FooterNotAuth from "@/layout/FooterNotAuth.vue";
import HeaderNotAuth from "@/layout/HeaderNotAuth.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../../stores/user";
import { postRateApi } from "@/api/rate/RateApi";

const route = useRoute();
const router = useRouter();
const fruit = ref<any>({});
const desRate = ref();

const getDetail = async () => {
	try {
		const response = await getProductApi(route.params.id as string);
		fruit.value = response.data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

getDetail();

const userStore = useUserStore();

const rateOn = async () => {
	userStore.userCurrent;
	const data = { text: desRate.value, file: "", user: userStore.userCurrent.email, idProduct: fruit.value._id, status: "pending" };
	const response = await postRateApi(data);
	if(response.data) {
		router.push("/list-pending")
	}
};
</script>

<template>
	<HeaderNotAuth />
	<div class="min-h-[730px] flex flex-col items-center">
		<div class="flex py-10 gap-4">
			<img class="max-w-[300px] rounded-lg" :src="fruit.imageUrl" alt="" />
			<div>
				<div class="text-xl font-semibold py-8">{{ fruit.name }}</div>
				<div class="text-lg font-semibold">{{ fruit.info }}</div>
				<div class="text-base font-semibold">{{ fruit.des }}</div>
			</div>
		</div>
		<div class="text-base font-semibold">Đánh giá</div>
		<div class="flex flex-col gap-2">
			<textarea v-model="desRate" class="outline-none border border-[#eee] w-[500px] h-[100px] p-2" placeholder="nhập đánh giá" />
			<!-- <input type="file" /> -->
			<div v-if="userStore && userStore.userCurrent && Object.keys(userStore.userCurrent).length">
			<button @click="rateOn" type="button" class="border bg-green-400 p-2 rounded-lg w-[100px] mx-auto">Xác nhận</button>
			 </div>
			 <div @click="router.push('/login')" v-else type="button" class="border bg-green-400 p-2 rounded-lg w-[200px] mx-auto flex justify-center text-white cursor-pointer"> Đăng nhập để đánh giá </div>
		</div>
	</div>
	<FooterNotAuth />
</template>
