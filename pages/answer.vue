<template>
	<div>
		<div class="header">
					<div class="question">
					<div class="under_line"></div>
					<span>it was the best</span>
		</div>
		</div>
		<div class="under-info">
			<div class="time">
				<h1>{{time}}</h1>
			</div>
			<div class="center">
				<img style="width: 250px;" src="/assets/img/majesticons_image-line.png" alt="">
				<input placeholder="Type your answer" type="text" name="" id="">
			</div>
			<button>Submit</button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const time = ref(30)
let interval = null;

const startCountdown = () => {
	interval = setInterval(() => {
		if(time.value > 0) {
			time.value -= 1;
		}else {
			clearInterval(interval)
		}
	}, 1000)
}

onMounted(() => {
	startCountdown();
})
onUnmounted(() => {
	clearInterval();
})
</script>

<style scoped>
.question {
	background-color: #444444;
	color: white;
	font-size: 30px;
	font-weight: bold;
	padding: 30px 15px;
	display: flex;
	align-items: end;
	gap: 30px;
	justify-content: center;
}
.time h1 {
	background-color: orange;
	color: white;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
}
.center {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.center input {
	background-color: #444444;
	border: none;
	width: 500px;
	color: white;
	font-size: 30px;
	height: 60px;
	text-align: center;
	font-weight: bold;
	margin-top: 30px;
}
.center input:focus {
	outline: none;
}
.under_line {
	background-color: #FF8600;
	height: 1vh;
	width: 150px;
}
button {
	background-color: #444444;
	color: white;
	border: none;
	padding: 20px 30px;
	font-size: 17px;
	border-radius: 15px;
}
.under-info {
	background-color: #222222;
	width: 100%;
	height: 90.2vh;
}
.under-info {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
}
</style>