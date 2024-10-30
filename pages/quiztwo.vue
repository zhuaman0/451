<script setup>
definePageMeta({
    layout: 'small'
})
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
                        <h2>Text Field</h2>
                    </div>
                    
                </div>
            </main>
        </section>  
        <div class="linee"></div>
        <section class="quiz">
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
                    <option value="type_answer">Type Answer</option>
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
    justify-content: center;
}

.content{
    width: 600px;
    height: 86px;
    background-color: #333333;
    border-radius:15px;
    display: flex;
    align-items: center;
}

.content h2{
    margin-left:30px;
}

.color{
    border-radius:10px;
    height: 90%;
    width: 24px;
    margin-left: 6px;
    background-color: #F69056;
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

.quiz{
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
}
</style>