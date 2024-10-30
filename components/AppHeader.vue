<template>
   <header>
      <div class="all-logo">
         <div class="header-main">
            <nuxt-link to="/">
               <div class="head-main">
                  <img src="../assets/img/logo.png" alt="logo" class="logo-img">
                  <div class="logo-name">451 GRADUS</div>
               </div>
            </nuxt-link>
         </div>
         <div class="buttons">
            <button @click="openQuizModal" class="enter">Enter The Quiz</button>
            <button class="quiz">Create Own Quiz</button>
         </div>
      </div>
   </header>
</template>

<style>
header {
   height: 80px;
   width: 100%;
   border-bottom: 1px solid #444444;
   display: flex;
   align-items: center;
   padding: 0 30px;
   background-color: #222222;
}

.all-logo {
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
}

.header-main .logo-img {
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
   text-decoration: none;
}

.enter {
	background: linear-gradient(45deg, #ff6600, #ffcc33);
	color: white;
	border-radius: 15px;
	padding: 12px 30px;
	font-size: 15px;
	font-weight: normal;
	border: none;
}
.quiz {
	background: linear-gradient(45deg, #74A462, #348517);
	color: white;
	border-radius: 15px;
	padding: 12px 30px;
	font-size: 15px;
	font-weight: normal;
	border: none;
}
.buttons {
	display: flex;
	gap: 20px;
}
</style>

<script setup>

import { defineEmits } from 'vue';
const emit = defineEmits(['openQuiz'])

const openQuizModal = () => {
	emit('openQuiz')
}

</script>