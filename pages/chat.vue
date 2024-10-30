<template>
	<div class="chat">
		<div class="chat-side">

		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'chat'
})
</script>

<style  scoped>
.chat {
	height: 100%;
	width: 100%;
}
.chat-side {
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 150px;
	background-color: #222222;
}

</style>