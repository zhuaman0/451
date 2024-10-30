<template>
   <div class="info">
      <div class="info-content">
         <div class="info-h">
         <div class="info-h-l">
            <h2>Шоко Әлем 2</h2>
            <div class="main-info">
               <div>Autor: <span>  John Smith</span></div>
               <div>Release Date:<span>  03.11.2019v</span></div>
               <div>Language :<span>  Kazakh</span></div>
               <div>Genres: <span>  Fantastic, Utopia, Parallel World, Imagination</span></div>

            </div>
            <p class="full-info">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
         </div>
         <div class="info-h-r">
            <img src="../assets/img/books/image 61.png" alt="">
         </div>
      </div>
      <AppChoose class="cho"/>
      </div>
      
   </div>
</template>

<script setup>
definePageMeta({
   layout: 'main'
})
</script>

<style scoped>
   .info {
      height: 100%;
      width: 100%;
      color: white;
      padding: 20px 150px 0 50px;
      font-family: "Montserrat", sans-serif;


   }
   .info-h{
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-start;
   }

   .info-h-l h2 {
       font-size: 40px;
      font-weight: 500;
   } 
   .main-info{
      margin-top: 20px ;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
   }
   .main-info div span{
      color: #FF7F42;
   }
   .full-info{
      margin-top: 50px;
      font-size: 15px;
      font-size: 100;
      width: 70%;
   }
   .info-h-r{
      width: 100%;
      height: 100%;
   }
   .info-h-r img {
      height:400px;
      width: 100%;
   }
   .cho {
      margin-top: 90px;
      margin-left: -50px;
   }
</style>