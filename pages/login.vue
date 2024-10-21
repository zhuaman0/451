<template>
	<section class="all">
	  <main class="signin">
		 <h1>Sign in to your account</h1>
		 <form @submit.prevent="login">
			<input v-model="email" type="email" placeholder="Email" required />
			<input v-model="password" type="password" placeholder="Password" required />
			<button type="submit">Sign in</button>
		 </form> 
		 <div class="google">
			<img src="../assets/img/Group.png" width="26" height="26" />
			<a href="#">Sign in with Google</a>
		 </div>
		 <div class="new-acc">
			<p>Still don't have an account?</p>
			<NuxtLink to="/register"><a href="#">Create account</a></NuxtLink>
		 </div>
	  </main>
	  <img src="../assets/img/Contact Image  --lummi.png" width="420" height="100%" class="login-img" />
	</section>
</template>

<style scoped>
.all{
	background-color: #222222;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	overflow: hidden;
}
.signin{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	margin: auto;
}
.signin h1{
	color: white;
	font-size: 42px;
}
.signin form{
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
}
.signin form input{
	width: 412px;
	height: 42px;
	background-color: transparent;
	border: 1px solid rgb(192, 192, 192);
	border-radius: 12px;
	font-size: 15px;
	font-weight: 700;
	padding: 0 10px;
}
.signin button{
	width: 480px;
	height: 50px;
	border-radius: 10px;
	background: linear-gradient( #FF673E, #FFCC4D);
	border: none;
	color: white;
	font-size: 21px;
	font-weight: 700;
}
.signin .google{
	display: flex;
	align-items: center;
	justify-content: center;
	gap:14px;
	width: 480px;
	height: 50px;
	background-color: #283A54;
	border-radius: 10px;
	border: 1px solid #4B5563;
}
a{
	text-decoration: none;
	color: white;
	font-size: 14px;
	font-weight: 600;
}
.signin .new-acc{
	display: flex;
	gap: 6px;
}
p{
	color: white;
	font-weight: 600;
	font-size: 14px;
}
a{
	text-decoration: none;
	font-weight: 600;
	font-size: 14px;
	color: #0094FF;
}
@media (max-width: 822px) {
	.login-img{
		display: none;
	}
}
@media (max-width: 416px) {
	.login-img{
		display: none;
	}
	.all{
	height: 896px;
	background-color: #222222;
	width: 100%;
	height: 100vh;
	display: block;
	justify-content: center;
	align-items: center;
	}
	.signin{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	height: 896px;
	}
	.signin button{
	width: 90%;
	}
	.signin .google{
	width: 90%;
	}
	.signin h1{
	font-size: 32px;
	}
	.signin form{
	display: flex;
	flex-direction: column;
	gap: 20px;
	}
	.signin form input{
	width: 340px;
	height: 42px;
	}
}
</style>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
	const response = await axios.post('http://localhost:3001/login', {
		email: email.value,
		password: password.value
	});
	localStorage.setItem('token', response.data.token);
	localStorage.setItem('user', JSON.stringify(response.data.user));
	router.push('profile');
  } catch (error) {
	alert('Login failed: ' + error.response.data.message);
  }
};
</script>
