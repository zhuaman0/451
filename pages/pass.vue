<template>
	<div>
		<div class="passquiz">
			<div class="container">
				<h1>{{ question.question }}</h1>
				<div class="center">
					<div class="question">
					<div class="under_line"></div>
					<span>it was the best</span>
				</div>
				</div>
				<div class="time-process">
					<span class="line"></span>
				</div>
			</div>
		</div>
		<div class="number">
			<div class="which">
				<h1>1</h1>
				<h1>/</h1>
				<h1>5</h1>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const question = ref({})
const router = useRouter();
import { ref } from 'vue';
import axios from 'axios';
const getQuiz = async (id) => {
	try {
		const response = await axios.get(`https://33b6e19cf40bfcda.mokky.dev/questions/${id}`)
		question.value = response.data
	}catch(err) {
		console.log(err)
	}
}

onMounted(() => {
	getQuiz(1);
	setTimeout(() => {
	router.push('answer')
}, 5000)
})
</script>

<style scoped>
.which {
	position: absolute;
	display: flex;
	align-items: center;
	gap: 5px;
	background-color: orange;
	border-radius: 50px;
	padding: 15px 30px;
	color: white;
	top: 90px;
	left: 50px;
}
.passquiz {
	background-color: #222222;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: white;
	font-size: 40px;
}
.center {
	display: flex;
	justify-content: center;
	width: 100%;
}
.question {
	background-color: #444444;
	color: white;
	font-size: 45px;
	font-weight: bold;
	padding: 15px 15px;
	display: flex;
	align-items: end;
	gap: 30px;
	margin: 300px 0;
	justify-content: center;
	width: 700px;
}
.under_line {
	background-color: #FF8600;
	height: 1vh;
	width: 150px;
}
.time-process {
	position: relative;
	background-color: #A1988E;
	width: 1200px;
	height: 15px;
	border-radius: 10px;
}
.line {
	position: absolute;
	background-color: orange;
	left: 0;
	top: 0;
	width: 150px;
	height: 15px;
	border-radius: 10px;
	animation: fillline 5s linear forwards;
}

@keyframes fillline {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}
</style>