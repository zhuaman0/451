<template>
   <div class="admin-announce">
<div class="ann-content">
   <div class="ann-h">
      <div class="year-all">YEAR : <span>2024</span> </div>
      <button class="plus">+</button>
   </div>
   <div class="ann-main">
      <p class="game-s">Completed Games</p>
      <div class="boxes">
               <div class="box">
                  <div>September Game</div>
                  <div>Number of participated teams: 34</div>
                  <div>Date:29.09.2024</div>
                  <div>MAX Score: 18</div>
                  <button>Show Details </button>
               </div>
               <div class="box">
                  <div> October Game</div>
                  <div>Number of participated teams: 29</div>
                  <div>Date:31.10.2024</div>
                  <div>MAX Score: 19</div>
                  <button>Show Details </button>
               </div>

      </div>
      <p class="game-s">
         Announced Games
      </p>
       <div class="box">
                  <div>September Game</div>
                  <div>Number of participated teams: 34</div>
                  <div>Date:29.09.2024</div>
                  <div>MAX Score: 18</div>
                  <button>Show Details </button>
               </div>
     
   </div>
</div>
   </div>
</template>

<script>
   definePageMeta({
      layout: 'main'
   })
</script>

<style scoped>
.admin-announce{
   height: 100%;
   width: 100%;
   padding: 40px;
}
.ann-content{
   height: 100%;
   width: 100%;
}
.ann-h{
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
}
.year-all{
   color: white;
   font-size: 20px;
}
.year-all span{
   padding: 5px 10px;
   border-radius: 13px;
   background-color: #333333;
}
.plus{
   height: 40px;
   width: 40px;
   cursor: pointer;
   font-size: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   border-radius: 50%;
   background-color: #555555;
   border: 0;
}
.game-s{
   color: white;
   margin: 15px 0;
}
.ann-main .boxes{
   display: flex;
   gap: 20px;
}
.boxes{
   display: flex;
}
.box{
   background-color: #555555;
   padding: 20px 30px;
   width: 350px;
   border-radius: 10px;
   display: flex;
   font-weight: 300;
   gap: 12px;
   font-size: 18px ;
   align-items: center;
   flex-direction: column;
   color: white;
   text-align: center;
}
.box button{
width: 100%;
border-radius: 15px;
height: 35px;
border: 0;
color: white;
background: linear-gradient(45deg,#FFBD4C, #FF6D40);
}
</style>