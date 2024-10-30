<template>
   <div class="books">
      <div class="books-content">
      <div class="books-h">
         <div class="books-h-l">
            <h2>October 2024</h2>
            <p>Choose the book for the month</p>
         </div>
         <div class="books-h-r">
            <div class="timer">23 h 59 min</div>
            <h5>Until voting ends </h5>
         </div>
      </div>
      <div class="books-list">
         <div class="book-c">
            <img src="../assets/img/books/image 61.png" alt="">
            <div @click="shoko" style="color: white;" class="vote-book-name">"Шоко Әлем 2"</div>
         </div>
         <div class="book-c">
            <img src="../assets/img/books/kristi_a_desyat_negrityat.webp" alt="">
            <div class="book-name">"Десять Нергитят"</div>
         </div>
         <div class="book-c">
            <img src="../assets/img/books/voina_i_mir.webp" alt="">
            <div class="book-name">"Война и мир"</div>
         </div>
         <div class="book-c">
            <img src="../assets/img/books/image 58.png" alt="">
            <div class="book-name">" Ұшқан ұя"</div>
         </div>
      </div>
      <AppChoose/>
      </div>
   </div>
</template>

<script setup>
definePageMeta({
   layout: 'main'
})
import { useRouter } from 'vue-router';
const router = useRouter();
const shoko = () => {
   router.push('info')
}
</script>

<style scoped>
   .books {
      height: 100%;
      width: 100%;
      padding: 20px 150px 0 50px;
   }
   .books-content {
         width: 100%;
         height: 100%;
   }
   .books-h {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
   }
   .books-h-l{
      display: flex;
      flex-direction: column;
      gap: 15px;
   }
   .books-h-l h2 {
      font-size: 40px;
      font-weight: 500;
   }
   .books-h-l p{
      font-size: 15px;
      font-weight: 300;
   }
   .books-h-r{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px ;
      
   }
   .books-h-r .timer{
      padding: 10px  30px ;
      font-size: 17px;
      background: linear-gradient(90deg, #FF6A33, #FADB3E);
      border-radius: 10px;
   }
   .books-h-r h5{
      font-size: 17px;
      font-weight: 500;
   }
   .books-list{
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
   }  
   .book-c{
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
   }
   .book-c img {
      width: 150px;
      height: 240px;
      border-radius: 5px
   }
   .book-c .book-name{
      color: white;
      font-size: 22px;
      font-weight: 300;
   }
</style>