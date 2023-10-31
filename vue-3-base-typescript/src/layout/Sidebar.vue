<script setup lang="ts">
const sidebar = [
	{ id: 1, tab: "Dashboard" },
	{ id: 2, tab: "Dashboard" },
	{ id: 3, tab: "Dashboard" },
	{ id: 4, tab: "Dashboard" }
];

</script>

<template>
	<div class="sidebar bg-white">
		<div class="main-sidebar h-[calc(100%-20px)] w-[calc(100%-20px)] rounded-xl">
			<div v-for="item in sidebar" :key="item.id" class="bg-white mx-2 my-2 rounded-lg h-10 px-2 flex items-center">
				<div>
					{{ item.tab }}
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.sidebar {
	height: calc(100vh - 80px);
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.main-sidebar {
	background: rgb(255, 195, 195);
}
</style>
