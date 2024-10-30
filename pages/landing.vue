<template>
    <div class="body">
        <section id="main" style="margin-bottom: 110px; margin-top: 100px;">
            <h1 class="main-txt">451° Degree it is a <br> book batle</h1>
        </section>
        <section id="features" style="margin-bottom: 100px;">
            <main class="features1" style="margin-bottom: 80px;">
                <h2>Immerse Yourself in the World of Literature</h2>
                <a href="#">Join the Book Battle</a>
            </main>
            <div class="container">
                <main class="container1">
                    <div class="content">
                        <img src="../assets/img/container-md-6.png" width="45">
                        <h4>Team Challenges</h4>
                        <p>Compete with your team in thrilling book trivia.</p>
                    </div>
                    <div class="content">
                        <img src="../assets/img/container-md.png" width="45">
                        <h4>Monthly Assignments</h4>
                        <p>Read a new book every month to prepare for the game.</p>
                    </div>
                    <div class="content">
                        <img src="../assets/img/container-md-1.png" width="45">
                        <h4>Interactive Gameplay</h4>
                        <p>Engage in exciting rounds of questions and answers.</p>
                    </div>
                </main>
                <main class="container1">
                    <div class="content">
                        <img src="../assets/img/container-md-2.png" width="45">
                        <h4>Season Finale</h4>
                        <p>Culminate the semester with an epic battle of knowledge.</p>
                    </div>
                    <div class="content">
                        <img src="../assets/img/container-md-3.png" width="45">
                        <h4>Team Collaboration</h4>
                        <p>Work together with your teammates to conquer the challenges.</p>
                    </div>
                    <div class="content">
                        <img src="../assets/img/container-md-4.png" width="45">
                        <h4>Intellectual Competition</h4>
                        <p>Test your literary knowledge and strategic thinking.</p>
                    </div>
                </main>
            </div>
        </section>
        <section id="rules" style="margin-bottom: 100px;">
            <h1 class="rule-main-txt" style="margin-bottom: 100px;">Game Rules</h1>
            <main class="rule-container">
                <div class="rule-content">
                    <p>Each team has a 3 players</p>
                    <p>Each should to finish reading the book in 1 month</p>
                    <p>Book will be chosen by voting between players</p>
                </div>
                <div class="rule-content">
                    <p class="text">Each game has a 4 rounds with 5 questions</p>
                    <p>After round the form of submitting will be closed</p>
                    <p>You need to pay a Participation fee for each game or buy a subscription for semester</p>
                </div>
            </main>
        </section>
        <h1 class="main-text2" style="margin-bottom: 100px;">Today a reader, <br> tomorrow a leader.</h1>
        <section class="prices">
            <div class="info">
                <h1>Each Game</h1>
                <main class="information">
                    <div class="gift">
                        <h2>1000KZT</h2>
                        <p>Play fee for 1 game</p>
                    </div>
                    <div class="needs-to">
                        <p>✅ Additional Reading Challenges</p>
                        <p>✅ Exclusive In-Game Rewards</p>
                        <p>✅ Advanced Team Analytics</p>
                        <p>✅ Priority Customer Support</p>
                    </div>
                </main>
            </div>
            <div class="info">
                <h1>Each Game</h1>
                <main class="information">
                    <div class="gift">
                        <h2>40000KZT</h2>
                        <p>Subscription for <br> semester </p>
                    </div>
                    <div class="needs-to">
                        <p>✅ Customizable Team Competitions</p>
                        <p>✅ Dedicated Team Leaderboard</p>
                        <p>✅ Onboarding support</p>
                        <p>✅ Performance Tracking Tools</p>
                        <p>✅ Team Achievement Badges</p>
                    </div>
                </main>
            </div>
            
        </section>
    </div>
</template>

<style scoped>
.main-txt {
    font-size:70px;
    font-weight: 800;
    background: linear-gradient(to right, #FF683F, #FFC94D); 
    background: linear-gradient(to bottom, #FF683F, #FFC94D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-align: center;
}
#features{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
}
.features1{
    display: flex;
    flex-direction: column;
    gap: 22px;
    align-items: center;
}
.features1 h2{
    color: white;
    font-size: 26px;
}
.features1 a{
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 38px;
    background-color: #FF7F42;
    color: white;
    font-size: 18px;
    border-radius: 8px;
}
.container{
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.container1{
    display: flex;
    justify-content: center;
    gap: 60px;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 320px;
    color: white;
    gap: 18px;
}

.content h4{
    font-size: 17px;
}

.content p{
    font-size: 16px;
    gap: 10px;
    line-height: 1.5;
}

.rule-main-txt{
    color: white;
    text-align: center;
    font-size: 54px;
}

.rule-container{
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.rule-content{
    display: flex;
    gap: 60px;
    color: white;
    justify-content: center;
    flex-wrap: wrap;
}

.rule-content p{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 200px;
    background-color: #444444;
    border-radius: 20px;
    padding: 0 70px;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
}

.main-text2{
    display: flex;
    font-size: 70px;
    font-weight: 800;
    background: linear-gradient(to right, #fa6238, #FFC94D); 
    background: linear-gradient(to bottom, #fa6238, #FFC94D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-align: center; 
    justify-content: center;
    align-items: center;
    width: 1080px;
    height: 300px;
    border: 7px solid #FFB14A;
    border-radius: 30px;
    margin: 0 auto;
}

.prices{
    display: flex;
    justify-content: center;
    gap: 80px;
}

.info{
    display: flex;
    flex-direction: column;
    color: white;
}

.info h1{
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;
}

.information{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 380px;
    height: 420px;
    background-color: #444444;
    border-radius: 50px;
    padding: 26px;
}

.gift{
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    justify-content: space-between;
}

.gift h2{
    font-size: 32px;
}

.gift p{
    font-size: 16px;
}

.needs-to{
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 30px;
}

</style>








<script setup>
definePageMeta({
    layout: 'land'
})
</script>