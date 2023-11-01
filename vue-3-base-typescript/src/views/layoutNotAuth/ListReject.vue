<script setup lang="ts">
import { reactive } from "vue";
import { getRateRejectApi } from "@/api/rate/RateApi";
import HeaderNotAuth from "@/layout/HeaderNotAuth.vue";
import FooterNotAuth from "@/layout/FooterNotAuth.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const list = reactive<any>([]);
const userStore = useUserStore();
const router = useRouter();

const getDate = async () => {
	const response = await getRateRejectApi();
	const data: any = response.data;
	if (response.data) {
		list.push(...data);
		list.reverse();
	}
};

getDate();
</script>

<template>
	<HeaderNotAuth />
	<div class="flex flex-col justify-center items-center w-full my-10">
		<div class="max-w-[1000px] min-w-[800px] flex flex-col gap-10">
			<div class="text-lg font-semibold text-primary">Danh Sách Reject</div>
			<div v-for="item in list" :key="item.id" id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
				<h2 id="accordion-color-heading-1">
					<button
						type="button"
						class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
						data-accordion-target="#accordion-color-body-1"
					>
						<span>Người đánh giá: {{ item.user }}</span>
						<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
						</svg>
					</button>
				</h2>

				<h2 id="accordion-color-heading-2">
					<button
						type="button"
						class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
						data-accordion-target="#accordion-color-body-2"
					>
						<span>Nội dung: {{ item.text }}</span>
						<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
						</svg>
					</button>
				</h2>
				<h2 id="accordion-color-heading-3">
					<button
						type="button"
						class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
					>
						<span>Trạng thái: {{ item.status }}</span>
						<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
						</svg>
					</button>
				</h2>
				<h2 id="accordion-color-heading-3">
					<button
						type="button"
						class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
					>
						<span>Shop: {{ item.ownerProduct }}</span>
						<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
						</svg>
					</button>
				</h2>
			</div>
		</div>
	</div>
	<FooterNotAuth />
</template>
