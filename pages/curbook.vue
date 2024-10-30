<template>
   <div>
<div class="info">
      <div class="info-content">
         <div class="info-h">
         <div class="info-h-l">
                           <h2>October 2024</h2>
           <div class="just-info">
             <div class="cur-info">
            <p class="cur">Current book of hte month:</p>
            <h3>“Десять негритят”</h3>
            </div>
            <div class="main-info">
               <div>Autor: <span>  John Smith</span></div>
               <div>Release Date:<span>  03.11.2019v</span></div>
               <div>Language :<span>  Kazakh</span></div>
               <div>Genres: <span>  Fantastic, Utopia, Parallel World, Imagination</span></div>

            </div>
           </div>
            <p class="full-info">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
         </div>
         <div class="info-h-r">
            <img src="../assets/img/books/kristi_a_desyat_negrityat.webp" alt="">
            <button class="btn-download">Download a book <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.09961 12L3.09961 7L4.49961 5.55L7.09961 8.15V0H9.09961V8.15L11.6996 5.55L13.0996 7L8.09961 12ZM2.09961 16C1.54961 16 1.07894 15.8043 0.687609 15.413C0.296276 15.0217 0.100276 14.5507 0.0996094 14V11H2.09961V14H14.0996V11H16.0996V14C16.0996 14.55 15.9039 15.021 15.5126 15.413C15.1213 15.805 14.6503 16.0007 14.0996 16H2.09961Z" fill="white"/>
</svg></button>
         </div>
      </div>
      <AppChoose class="cho"/>
      </div>
      
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
   
   .info-h-l{
      height: 100%;
   }
   .info-h-l h2 {
       font-size: 40px;
      font-weight: 500;
      margin-bottom: 20px;
   } 
   .main-info{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
   }
   .main-info div {
      font-size: 12px;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
   }
   .info-h-r img {
      height: 400px;
      width: 100%;
   }
   .info-h-r button{
      width: 90%;
      height: 35px;
      border: 0;
      border-radius: 10px;
      background-color: #FBBE3A;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   button svg {
      height: 13px;
      width: 15px;
      margin-left: 5px
   }
   .cho {
      margin-top: -10px;
      margin-left: -50px;
   }
   .just-info{
      display: flex;
      align-items: center ; 
      gap: 30px;
   }
   .cur-info{
      display: flex;
      flex-direction: column;
      gap: 22px ;
   }
   .cur{
      font-size: 17px;
      font-weight: 300;
   }
   .cur-info h3 {
      font-size: 30px;
      font-weight: 300;
   }
</style>