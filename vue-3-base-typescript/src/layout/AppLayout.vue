<script setup lang="ts">
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
</script>
<template>
	<div class="layout-content">
		<Header />
		<div class="flex">
			<Sidebar />
			<router-view></router-view>
		</div>
	</div>
</template>
