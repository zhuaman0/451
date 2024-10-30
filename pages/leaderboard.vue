<template>
	<div>
		<div class="result_container">
			<div class="top_result">
				<div class="top top-1">
					<div class="title_top">
						<div class="title_name">
							<img src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg" alt="">
							<h1>Kuka x2</h1>
						</div>
						<div class="title_cup">
							<img src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-winner-gold-cup-png-image_9574908.png" alt="">
						</div>
					</div>
					<div class="challenger">
						<img src="https://i.pinimg.com/originals/68/92/e7/6892e7849d6e644fd686d43a61689f3d.png" alt="">
						<p>Challenger</p>
					</div>
					<div class="results">
						<div class="result result-1">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'red'}" class="result_line"></div>
						</div>
						<div class="result result-2">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'green'}" class="result_line"></div>
						</div>
						<div class="result result-3">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'blue'}" class="result_line"></div>
						</div>
					</div>
				</div>
				<div class="top top-1">
					<div class="title_top">
						<div class="title_name">
							<img src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg" alt="">
							<h1>Kuka x2</h1>
						</div>
						<div class="title_cup">
							<img src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-winner-gold-cup-png-image_9574908.png" alt="">
						</div>
					</div>
					<div class="challenger">
						<img src="https://i.pinimg.com/originals/68/92/e7/6892e7849d6e644fd686d43a61689f3d.png" alt="">
						<p>Challenger</p>
					</div>
					<div class="results">
						<div class="result result-1">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'red'}" class="result_line"></div>
						</div>
						<div class="result result-2">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'green'}" class="result_line"></div>
						</div>
						<div class="result result-3">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'blue'}" class="result_line"></div>
						</div>
					</div>
				</div>
				<div class="top top-1">
					<div class="title_top">
						<div class="title_name">
							<img src="https://img.freepik.com/free-psd/expressive-woman-gesturing_23-2150198673.jpg" alt="">
							<h1>Kuka x2</h1>
						</div>
						<div class="title_cup">
							<img src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-winner-gold-cup-png-image_9574908.png" alt="">
						</div>
					</div>
					<div class="challenger">
						<img src="https://i.pinimg.com/originals/68/92/e7/6892e7849d6e644fd686d43a61689f3d.png" alt="">
						<p>Challenger</p>
					</div>
					<div class="results">
						<div class="result result-1">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'red'}" class="result_line"></div>
						</div>
						<div class="result result-2">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'green'}" class="result_line"></div>
						</div>
						<div class="result result-3">
							<p>Social Stars</p>
							<div class="result_numbers">
								<p>42</p>
								-
								<p>41</p>
							</div>
							<div :style="{backgroundColor: 'blue'}" class="result_line"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="top_groups"></div>
		</div>
	</div>
</template>
<style scoped>
.result_container {
	padding: 50px 130px;
}
.top {
	background-color: #1B1B1E;
	border-radius: 15px;
	width: 400px;
	padding: 20px 20px;
}
.title_name img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
.title_name {
	display: flex;
	align-items: center;
	gap: 10px;
}
.title_name h1 {
	color: white;
	font-size: 17px;
	font-weight: 200;
}
.title_cup img{
	width: 60px;
	height: 60px;
}
.top_result {
	display: flex;
	justify-content: space-between;
}
.title_top {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.challenger img {
	width: 30px;
	height: 20px;
}
.challenger {
	display: flex;
	align-items: center;
	color: white;
	font-size: 15px;
	gap: 10px;
	margin: 20px 0;
}
.result {
	color: white;
}
.result_numbers {
	display: flex;
	gap: 5px;
	padding: 20px 0;
	font-size: 15px;
}
.result_line {
	border-top: 2px dashed #1B1B1E;
	height: 1px;
	width: 100%;
}
.results {
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
}
</style>

<script setup>
definePageMeta({
	layout: 'main'
})
const color = ref(['red', 'blue', 'green'])
</script>
