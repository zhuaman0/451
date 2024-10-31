<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
definePageMeta({
    layout: 'small'
})

const secondversion = () => {
    router.push('/quiztwo')
}
</script>

<template>
    <div class="body">
        <section class="game">
            <h1 class="main-text">Type your question</h1>
            <main class="question">
                <button class="btn">+</button>
                <p class="txt">Find and insert media</p>
                <label for="file-upload" class="upload-btn">
                    <span class="not-same">Upload file</span> or drag here to upload
                    <input type="file" id="file-upload" hidden>
                </label>
            </main>
            <main class="variants">
                <div class="container">
                    <div class="content">
                        <div class="color"></div>
                        <h3>Option 1</h3>
                    </div>
                    <div class="content">
                        <div class="color2"></div>
                        <h3>Option 2</h3>
                    </div>
                </div>
                <div class="container">
                    <div class="content">
                        <div class="color3"></div>
                        <h3>Option 3</h3>
                    </div>
                    <div class="content">
                        <div class="color4"></div>
                        <h3>Option 4</h3>
                    </div>
                </div>
            </main>
        </section>  
        <div class="linee"></div>
        <section class="quizz">
            <div  class="prepares">
                <h3>Enter QUIZ title</h3>
                <input type="text" placeholder="Title">
            </div>
            <div class="prepares">
                <h3>Time Limit</h3>
                <input type="number" placeholder="20 seconds">
            </div>
            <div class="prepares">
                <h3>Question type</h3>
                <select>
                    <option value="quiz">Quiz</option>
                    <option value="type_answer">First varient</option>
                    <option @click="secondversion" value="type_answer">Seond version</option>
                </select>
            </div>
            <div class="prepares">
                <h3>Points</h3>
                <input type="number" placeholder="1">
            </div>
            <button class="button">Submit</button>
        </section>
    </div>
</template>
<style scoped>
.body{
    color: white;
    width: 100%;
    display: flex;
}

.main-text{
    border-bottom: 2px solid #444444;
    width: 500px;
    margin: 0 auto;
    text-align: center;
    font-size: 44px;
}

.linee{
    border-right: 1px solid #444444;
    height: 89vh;
}

.game{
    width: 73%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    margin-top: 30px;
}

.question{
    width: 450px;
    background-color: #444444;
    height: 200px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto
}

.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #555555;
    border: none;
    color: white;
    font-size: 60px;
    font-weight: 300;
    cursor: pointer;
}

.not-same{
    font-weight: 700;
    border-bottom: 1.4px solid;
}

.upload-btn{
    cursor: pointer;
    font-size: 18px;
}

.txt{
    font-size: 18px;
}

.variants{
    width: 750px;
    background-color: transparent;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.container{
    display: flex;
    justify-content: space-between;
}

.content{
    width: 340px;
    height: 75px;
    background-color: #333333;
    border-radius:15px;
    display: flex;
    align-items: center;
}

.content h3{
    margin: 0 auto;
}

.color{
    border-radius:10px;
    height: 90%;
    width: 24px;
    margin-left: 6px;
    background-color: #F69056;
}

.color2{
    background-color: #EBEB40;
    border-radius:10px;
    height: 90%;
    width: 24px;
    margin-left: 6px;
}

.color3{
    background-color: #3778F0;
    border-radius:10px;
    height: 90%;
    width: 24px;
    margin-left: 6px;
}

.color4{
    background-color: #5ADD4B;
    border-radius:10px;
    height: 90%;
    width: 24px;
    margin-left: 6px;
}

.prepares h3{
    font-weight:500; 
}

.prepares input{
    border: 2px solid #ED7B1D;
    background-color: transparent;
    height: 34px;
    width: 100%;
    border-radius: 8px;
    padding: 0 5px;
    font-size: 16px;
}

.prepares select{
    border: 2px solid #ED7B1D;
    background-color: transparent;
    height: 34px;
    width: 100%;
    border-radius: 8px;
    padding: 0 5px;
    font-size: 16px;
    color: #777777;
}

.button{
    display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35px;
        border-radius: 8px;
        border: none;
        font-weight: 700;
        font-size: 16px;
        color: white;
        background: linear-gradient(45deg, #ff6600, #ffcc33);
        cursor: pointer;
}

.quizz{
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
}
</style>