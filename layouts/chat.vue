<template>
	<div class="grid-container">
		<header class="app-header">
			<AppHeader @openQuiz="showModal = true" />
		</header>
		<aside :style="{width: asideWidth + 'px'}" class="app-aside">
			<AppAside @small="smaller"/>
		</aside>	
		<main class="app-main">
			<slot/>
		</main>
		<QuizModal v-if="showModal" @close="showModal = false" />
	</div>
</template>

<style scoped>
.grid-container {
	display: grid;
	grid-template-rows: auto 1fr;						
	grid-template-columns: 100px 1fr;
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
   height: 100vh; 		
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
import { ref } from 'vue';
import QuizModal from '@/components/QuizModal.vue';
const asideWidth = ref(280); 
const smaller = () => {
  asideWidth.value = 100;
};

const showModal = ref(false);
</script>
