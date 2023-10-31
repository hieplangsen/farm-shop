<script setup lang="ts">
import { getAllProductApi } from "@/api/product/productApi";
import { reactive } from "vue";
import { IProductResponse } from "@/api/product/interface";
import { useRouter } from "vue-router";
import HeaderNotAuth from "@/layout/HeaderNotAuth.vue";
import FooterNotAuth from "@/layout/FooterNotAuth.vue";

const data = reactive<any>([]);
const router = useRouter();

const getData = async () => {
	const response = await getAllProductApi();
	const value = response.data as IProductResponse[];
	const flash: IProductResponse[] = [];
	const tuoi: IProductResponse[] = [];
	const tang: IProductResponse[] = [];
	value.map((item: IProductResponse) => {
		if (item.category === "flash-sale") {
			flash.push(item);
		}
		if (item.category === "traicaytuoi") {
			tuoi.push(item);
		}
		if (item.category === "quatang") {
			tang.push(item);
		}
	});

	data.push(
		...[
			{ title: "FLASH SALE", data: flash },
			{ title: "Trái cây tươi", data: tuoi },
			{ title: "Quà tặng", data: tang }
		]
	);
};
getData();
</script>
<template>
  <HeaderNotAuth />
	<div className="min-h-[500px] px-[100px] duration-200">
		<div>
			<div className="mt-6 flex">
				<div className="text-xl font-semibold text-primary cursor-pointer uppercase hover:underline">Trang chủ /</div>
				<div className="text-xl font-semibold text-primary pl-2 cursor-pointer uppercase hover:underline">Sản phẩm</div>
			</div>
			<div className="mt-6 flex justify-between">
				<div className="text-base font-semibold text-primary cursor-pointer uppercase hover:underline flex items-center gap-2">
					Sản phẩm
					<img className="w-4" src="@/assets/svg/down.svg" />
				</div>
				<div className="text-base font-semibold text-primary cursor-pointer uppercase hover:underline flex items-center gap-2">
					Trái cây tươi hằng ngày
					<img className="w-4" src="@/assets/svg/down.svg" />
				</div>
				<div className="text-base font-semibold text-primary cursor-pointer uppercase hover:underline flex items-center gap-2">
					Quà tặng trái cây
					<img className="w-4" src="@/assets/svg/down.svg" />
				</div>
				<div className="text-base font-semibold text-primary cursor-pointer uppercase hover:underline flex items-center gap-2">
					Danh sách đánh giá xấu
					<img className="w-4" src="@/assets/svg/down.svg" />
				</div>
				<div className="text-base font-semibold text-primary cursor-pointer uppercase hover:underline flex items-center gap-2">
					Danh sách chờ đánh giá
					<img className="w-4" src="@/assets/svg/down.svg" />
				</div>
				<div className="text-base font-semibold text-primary cursor-pointer uppercase hover:underline flex items-center gap-2">
					Danh sách đã đánh giá
					<img className="w-4" src="@/assets/svg/down.svg" />
				</div>
			</div>
			<div className="mx-10">
				<div v-for="(category, index) in data" :key="category.title">
					<div className="text-lg font-semibold mt-8 flex gap-2">
						<img v-if="index === 0" className="w-8" src="@/assets/svg/flash.svg" alt="" />
						{{ category.title }}
					</div>
					<div className="flex flex-wrap">
						<div
							v-for="item in category.data"
							:key="item._id"
							className="hover:bg-gray-100 w-1/4 duration-300 cursor-pointer h-[300px] rounded-lg flex flex-col items-center justify-center"
							@click="router.push(`/detail/${item._id}`)"
						>
							<img className="rounded-sm object-cover max-w-[250px] max-h-[200px]" :src="item.imageUrl" alt="" />
							<div className="font-semibold py-1">{{ item.name }}</div>
							<div className="font-semibold">{{ item.price.toLocaleString("vi-VN") }} VND</div>
						</div>
					</div>
					<div className="flex justify-center font-bold cursor-pointer py-4 hover:underline">Xem tất cả</div>
				</div>
			</div>
		</div>
	</div>
  <FooterNotAuth />
</template>
