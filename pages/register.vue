<template>
	<section class="all">
        <main class="signin">
			<h1>Create an account</h1>
			<form action="">
				<input type="text" placeholder="Full name">
				<input type="text" placeholder="User name">
				<div class="two-in-one">
					<input class="two" type="text" placeholder="Phone number">
					<input class="two" type="text" placeholder="Password">
				</div>
				<input type="text" placeholder="Email">
				

                <!-- <div class="checkbox">
                    <input type="checkbox" id="customCheckbox">
                    <label for="customCheckbox">remember me</label>
                </div> -->
                
			</form> 
			<button>Sign in</button>
			<div class="google">
				<img src="../assets/img/Group.png" width="26" height="26">
				<a href="">Sign in with Google</a>
			</div>
			<div class="new-acc">
				<p>You already have an account?</p>
				<NuxtLink to="/"><a href="">Sign in</a></NuxtLink>
			</div>
		</main>
		<img src="../assets/img/Contact Image  --lummi.png" width="420" height="100%" class="login-img"/>
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
        color: rgb(192, 192, 192);
	}

	.two-in-one{
		display: flex;
		width: 412px;
		justify-content: space-between;
	}
	.two-in-one .two{
		width: 200px;
	}

/* #customCheckbox {
    display: none;
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
}

.checkbox label {
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-transform: lowercase;
    cursor: pointer;
    display: flex;
    align-items: center;
	gap: 8px;
}

.checkbox label::before {
    content: "";
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 2px; 
    transition: background-color 0.3s ease;
}

.checkbox label::after {
    content: "";
    position: relative;
    right: 135px;
    bottom: 2px;
    width: 7px;
    height: 12px;
    border: solid rgb(254, 254, 254);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    display: none; 
} */

#customCheckbox:checked + label::after {
    display: block;
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
		a{
			text-decoration: none;
			color: white;
			font-size: 14px;
			font-weight: 600;
		}
	}

	.signin .new-acc{
		display: flex;
		gap: 6px;
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

<!-- <script setup>
definePageMeta({
	components: "",
})
</script> -->