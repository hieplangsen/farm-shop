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
const fileName = ref();

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
	const data = {
		text: desRate.value,
		file: "",
		user: userStore.userCurrent.email,
		idProduct: fruit.value._id,
		status: "pending",
		nameProduct: fruit.value.name,
		imageProduct: fruit.value.imageUrl,
		ownerProduct: fruit.value.ownerFullName
	};
	const response = await postRateApi(data);
	if (response.data) {
		router.push("/list-pending");
	}
};

const onFileInputChange = (e: any) => {
	console.log(e.target.files);
	fileName.value = e.target.files[0].name;
};
</script>

<template>
	<HeaderNotAuth />
	<div class="min-h-[730px] max-w-[1200px] flex flex-col items-center mx-auto">
		<div class="w-full">
			<div className="mt-8 flex">
				<div className="text-xl font-semibold text-primary cursor-pointer uppercase hover:underline">Trang chủ /</div>
				<div className="text-xl font-semibold text-primary pl-2 cursor-pointer uppercase hover:underline">Chi tiết sản phẩm</div>
			</div>
		</div>

		<div class="flex py-10 gap-4 w-full flex justify-center">
			<img class="w-[500px] rounded-lg" :src="fruit.imageUrl" alt="" />
			<div class="w-1/2 md:w-1/3">
				<div class="text-xl font-semibold py-8">{{ fruit.name }}</div>
				<div class="text-lg font-semibold">Thông tin: {{ fruit.info }}</div>
				<div class="text-base font-semibold">Mô tả: {{ fruit.des }}</div>
				<div>shop: {{ fruit.ownerFullName }}</div>
			</div>
		</div>
		<div class="text-base font-semibold mb-4">Đánh giá</div>
		<div class="mb-4">(Đánh giá nhận 200 coin)</div>
		<div class="flex flex-col gap-2 mb-[100px]">
			<textarea v-model="desRate" class="outline-none border border-[#eee] w-[500px] min-h-[100px] p-2 rounded-lg shadow-md" placeholder="Nhập đánh giá"></textarea>
			<div class="flex justify-center gap-5" v-if="userStore && userStore.userCurrent && Object.keys(userStore.userCurrent).length">
				<label for="fileInput" class="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
					{{ fileName ? fileName : "Chọn tệp" }}
					<input id="fileInput" type="file" class="hidden" @change="onFileInputChange" />
				</label>
				<button class="border bg-green-400 p-2 rounded-lg" type="button" @click="rateOn">Xác nhận</button>
			</div>
			<div v-else class="border bg-green-400 p-2 rounded-lg w-[200px] mx-auto flex justify-center text-white cursor-pointer" type="button" @click="router.push('/login')">
				Đăng nhập để đánh giá
			</div>
		</div>
	</div>
	<FooterNotAuth />
</template>
