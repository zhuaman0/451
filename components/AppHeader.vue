<template>
   <header>
      <div class="all-logo">
         <nuxt-link to="/">
				<div class="head-main">
					<img src="../assets/img/logo.png" alt="" class="logo-img">
            <div class="logo-name">451 GRADUS</div>
				</div>
			</nuxt-link>
      </div>
   </header>
</template>

<style >

header {
   height: 80px;
   width: 100%;
   border-bottom: 1px solid #444444;
   display: flex;
   align-items: center;
   padding-left: 30px;
	background-color: #222222;
}

.all-logo {
   display: flex;
   align-items: center;
   gap: 15px;
}

.all-logo .logo-img {
   height: 50px;
   width: 50px;
}

.logo-name {
   color: white;
   font-weight: bold;
   font-size: 20px;
}
.head-main {
   display: flex;
   align-items: center;
	gap: 15px;
}
.nuxt-link {
	text-decoration: none
}
</style>