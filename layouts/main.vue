<template>
	<div class="grid-container">
		<header class="app-header">
			<AppHeader/>
		</header>
		<aside class="app-aside">
			<AppAside/>
		</aside>	
		<main class="app-main">
			<slot/>
		</main>
	</div>
</template>

<style scoped>
.grid-container {
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: 250px 1fr;
	height: 100vh;
}
.app-header {
	z-index: 9;
	grid-column: 1 / -1;
}
.app-aside {
	z-index: 10;
	background-color: white;
}
.app-main {
	background-color: #f8f9fa;
}
</style>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppAside from '@/components/AppAside.vue';
</script>
