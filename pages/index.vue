<template>
	<div>
		<div class="main-page">
			<div class="container">
				<div class="first__row">
					<div class="your-progress">
				<h1>Your Progress:</h1>
				<div class="progress-container">
					<div class="progress-info">
						<div class="progress-title">You</div>
						<div class="progress-circle">
							<div class="progress-value circle-1"></div>
							<div class="progress-text">200<br>pages</div>
						</div>
						<div class="percente">
							<div class="progress-percentage">67%</div>
							<div class="progress-goal">200 pages</div>
						</div>
					</div>
				</div>
			</div>
			<div class="team-progress">
				<h1>Team Progress:</h1>
				<div class="all-progress">
					<div class="progress-container">
					<div class="progress-info">
						<div class="progress-title">Ameke</div>
						<div class="progress-circle">
							<div class="progress-value circle-2"></div>
							<div class="progress-text">200<br>pages</div>
						</div>
						<div class="percente">
							<div class="progress-percentage">67%</div>
							<div class="progress-goal">200 pages</div>
						</div>
					</div>
				</div>
				<div class="progress-container">
					<div class="progress-info">
						<div class="progress-title">Mr.Muha</div>
						<div class="progress-circle">
							<div class="progress-value  circle-3"></div>
							<div class="progress-text">200<br>pages</div>
						</div>
						<div class="percente">
							<div class="progress-percentage">67%</div>
							<div class="progress-goal">200 pages</div>
						</div>
					</div>
				</div>
				</div>
			</div>
			<div class="book-progress">
				<h1>Current Book:</h1>
				<div class="progress-container">
					<div class="progress-info">
						<div class="progress-title">Десять негритят</div>
						<div class="book">
							<img style="width: 75px;padding: 15px 0;" src="https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/c/o/kristi_a_desyat_negrityat.jpg" alt="">
						</div>
						<div class="book-info">
							<span style="font-weight: bold">300 pages</span>
							<p style="font-size: 15px; padding-top: 5px;">Detective, mystic,murderer, <br>
								drama, romantic</p>
						</div>
					</div>
				</div>
			</div>
				</div>
				<div class="second__row">
					<div class="subscription">
						<div class="info-part">
							<h1>Tired of constantly collecting money from team members for every game?</h1>
							<div class="desc">
							<p style="color: white;">1. You can get a subscription for</p>
							<p style="color: white;padding: 10px 0;">2. You can get a subscription for</p>
							<p style="color: white;">3. You can get a subscription for a </p>
							</div>
							<button>Get a subscription</button>
						</div>
						<div class="img-part">
							<img style="width: 200px;" src="../assets/img/DSC02917.png" alt="">
						</div>
					</div>
					<div class="subscription">
						<div class="info-part">
							<h1>Tired of constantly collecting money from team members for every game?</h1>
							<div class="desc">
							<p style="color: white;padding: 5px 0;">If you want more points, you can attend in ReadX.
								Those Students who are not satisfied with their points and want more, can attend in ReadX and gain the some extra points.</p>
							</div>
							<button>Get a subscription</button>
						</div>
						<div class="img-part">
							<img style="width: 200px;" src="../assets/img/DSC05905 (1) 1.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'chat'
})
</script>

<style scoped>
.container {
	max-width: 1300px;
	margin: 100px auto;
}
.all-progress {
	display: flex;
	gap: 30px;
}
.subscription {
	background-color: #333333;
	border-radius: 15px;
}
.progress-container {
	background-color: #333333;
	padding: 20px 20px;
	border: none;
	border-radius: 15px;
	color: white;
	display: flex;
	justify-content: center;
	width: 100%;
	text-align: center;
	margin-top: 20px;
}
.desc {
	padding: 50px 0;
}
.first__row {
	display: grid;
	grid-template-columns: 250px 1fr 250px;
	gap: 30px;
}
.book-info span {
	background: linear-gradient(45deg, #ff6600, #ffcc33);
   -webkit-background-clip: text;
   color: transparent;
}
.progress-title {
	font-size: 20px;
	font-weight: bold;
}
.progress-circle {
   position: relative;
   width: 150px;
   height: 150px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: none;
   border-radius: 50%;
	border: 6px solid #555555;
	margin: 10px 0;
}
.circle-1 {
	position: absolute;
   top: -6px;
   left: -6px;
   width: 150px;
   height: 150px;
   border-radius: 50%;
   border: 6px solid orange;
   clip: rect(0px, 100px, 100px, 50px);
}
.subscription {
	display: flex;
	justify-content: space-between;
	padding: 20px 20px;
}
.circle-2 {
	position: absolute;
   top: -6px;
   left: -6px;
   width: 150px;
   height: 150px;
   border-radius: 50%;
   border: 6px solid #6270F2;
   clip: rect(0, 500px, 100px, 50px);
}
.circle-3 {
	position: absolute;
   top: -6px;
   left: -6px;
   width: 150px;
   height: 150px;
   border-radius: 50%;
   border: 6px solid #59FA90;
   clip: rect(0px, 600px, 600px, 50px);
}
.progress-text {
	font-size: 20px;
	font-weight: bold;
}
.progress-goal {
	padding-top: 5px;
}
.info-part h1 {
	color: white;
	font-size: 20px;
}
.your-progress h1 {
	color: #FFFFFF;
	font-size: 15px;
}
.team-progress h1 {
	color: #FFFFFF;
	font-size: 15px;
}
.book-progress h1 {
	color: #FFFFFF;
	font-size: 15px;
}
.second__row {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	margin-top: 30px;
}
.info-part button {
	padding: 20px 20px;
	background: linear-gradient(45deg, #ff6600, #ffcc33);
	color: white;
	border: none;
	border-radius: 15px;
}
</style>