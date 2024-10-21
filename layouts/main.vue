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
	grid-template-columns: 280px 1fr;
	height: 100vh;
}
.app-header {
	z-index: 9;
	grid-column: 1 / -1;
}
.app-aside {
	z-index: 10;
	border-right: 1px solid #444444;
	background-color: #222222;
   height: calc(100vh - 100px);
   width: 280px ;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.app-main {
	background-color: #222222;
	width: 100%;
}
</style>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppAside from '@/components/AppAside.vue';
</script>
