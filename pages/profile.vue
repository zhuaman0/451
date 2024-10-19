<template>
	<main class="profile">
		<div class="profile-content">
		<div class="up-prof">
			<h2 class="prof-nick">Alish</h2>
			<div class="info-img">
				<div class="full-info">
					<div class="row">
						<div class="column">
							<div>Full Name: Alsiher Zhunisov</div>
							<div>Team: 'Tea-ішерс'</div>
							<div>Wins: 3</div>
							<div>Total points: 64</div>
						</div>
						<div class="column">
							<div>Member since: Oct 2023</div>
							<div>Last seen: 13sep 2024 </div>
							<div>All games: 8</div>
							<div>Leaderboard Place: 9</div>
						</div>
					</div>
				</div>
				<img src="" alt="">
			</div>
			<div class="balance">Balance: 1000KZT <span style="color: yellow;" >+</span></div>
			<div class="all-prog">
						<div class="cr-book">Current book: Ten Niggers</div>
				<div>Progress:</div>
				<div class="own-prog">48% <div class="prog-line-full"><div class="prog-cur"></div></div></div>
				<div>Team progress</div>
								<div class="own-prog">32% <div class="prog-line-full"><div class="prog-cur" style="  background: linear-gradient(90deg, #6270F2, #0094FF); width: 32%;
"></div></div></div>
				<div class="own-prog">73% <div class="prog-line-full"><div class="prog-cur" style="  background: linear-gradient(90deg, #59FA90, #3CA33A); width: 73%;
"></div></div></div>

			</div>
		</div>

		</div>
	</main>
</template>

<style scoped>
.profile{
	background-color: #222222;
	padding-left: 150px;
	padding-top: 50px;
}
.prof-nick{
	color: white;
	margin-bottom: 10px;
}
.info-img img{ 
	height: 170px;
	width: 170px;
	background-color: #444444 ;
	border-radius: 50%;
	border: 0;


}
.profile-content{
	max-width: 70%;
}

.info-img{
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
}

.row{	
	color: #ddd9d9;
	font-size: 13px;
	font-weight: bold;
	background-color: #444444;
	gap: 30px;
	padding: 55px 40px;
	border: 0;
	border-radius: 20px;
	display:inline-flex;
}
.column{
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.balance{
	font-weight: 100;
	color: white;
	margin: 30px 0;
	font-size: 18px;
}
.cr-book{
	color: white;
	font-weight: lighter;
	font-size: 16px;
}

.all-prog {
	font-size: 16px;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 15px;
}
.prog-line-full{
	width: 100%;
	height: 15px;
	border-radius: 10px;
	background-color: #444444;
}
.prog-cur{
	 width: 48%; /* Длина градиентной части, равная 48% */
  height: 100%;
  background: linear-gradient(90deg, #FF6A33, #FADB3E);
  border-radius: 10px;
}
.own-prog {
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 22px;
}


</style>

<script setup>
definePageMeta({
	layout: 'main'
})
</script>