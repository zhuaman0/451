<template>
   <div class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
         <h2>Welcome to the Quiz!</h2>
         <div class="modal-info">
            <input type="text">
            
            <button @click="startQuiz" :disabled="loading">
               <span v-if="loading">Loading...</span>
               <span v-else>Play</span>
            </button>
         </div>
      </div>
		<div v-if="loading" class="loading-overlay">
         <div class="spinner"></div>
      </div>
		<div v-if="ready" class="ready">
         <h1 data-aos="zoom-in">ready!</h1>
      </div>
		<div v-if="go" class="ready">
         <h1  data-aos="zoom-in">set!</h1>
      </div>
		<div v-if="set" class="ready">
         <h1 data-aos="zoom-in">go!</h1>
      </div>
   </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ref } from 'vue';
import { defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const emit = defineEmits(['close']);
const loading = ref(false);
const ready = ref(false);
const go = ref(false)
const set = ref(false) 

onMounted(() => {
   AOS.init({
       duration: 1000,
       once: true,
   });
});
function closeModal() {
   emit('close');
}

function startQuiz() {
   loading.value = true;
   setTimeout(() => {
      loading.value = false;
      ready.value = true;
      setTimeout(() => {
         ready.value = false;
         go.value = true;
         setTimeout(() => {
            go.value = false;
				set.value = true;
				setTimeout(() => {
					set.value = true;
					router.push('pass')
				}, 1000)
         }, 1000);
      }, 1000);
   }, 2000);
}
</script>

<style scoped>
.modal-overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;
}
.ready h1 {
	background-color: #DE793B;
	width: 350px;
	height: 120px;
	font-size: 60px;
	color: white;
	text-transform: uppercase;
	font-weight: 900;
}
.ready h1 {
	display: flex;
	align-items: center;
	justify-content: center
}
.ready {
	position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: #222222;
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal-content {
   background: #555555;
   padding: 20px;
   border-radius: 10px;
   width: 500px;
   text-align: center;
   color: white;
   font-size: 25px;
}
.modal-info {
   display: flex;
   flex-direction: column;
   gap: 10px;
   align-items: center;
   margin-top: 40px;
}
.modal-info input {
   width: 100%;
   background-color: transparent;
   border: none;
   border-bottom: 3px solid white;
   height: 40px;
   color: white;
   font-size: 20px;
   text-align: center;
}
.modal-info input:focus {
   outline: none;
}
.modal-info button {
   width: 200px;
   height: 50px;
   font-size: 15px;
   text-transform: uppercase;
   color: white;
   border: none;
   border-radius: 10px;
   background-color: #16A249;
   position: relative;
}
.modal-info button:disabled {
   background-color: #999999;
   cursor: not-allowed;
}

.loading-overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: #222222;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 2000;
}

.spinner {
   border: 4px solid #ffffff33;
   border-top: 4px solid orange;
   border-radius: 50%;
   width: 120px;
   height: 120px;
   animation: spin 1s linear infinite;
}

@keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
}
</style>
