<template>
	<div>
		<nuxt-link to="register"><button>asdf</button></nuxt-link>
		<nuxt-link to="profile">Go to profile</nuxt-link>
		<br>
		<nuxt-link to="landing">Land go</nuxt-link>
	</div>
</template>

<style scoped>
button {
	background-color: orange;
	padding: 20px 30px;
	color: white;
	border: none;
	font-size: 30px;
}
</style>

<script setup>
definePageMeta({
	layout: 'main'
})
</script>