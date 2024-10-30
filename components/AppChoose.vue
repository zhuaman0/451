<template>
   <div>
      <div class="books-l">
         <div class="slct">
            <label >
               <input type="radio" name="books-vote">
              <span class="radio-custom"></span>
            </label>
            <div class="votes">
               <div class="votes-cur" style="max-width: 70%;">
            </div></div>
            <div class="vote-book-name">"Шоко Әлем 2"</div>

         </div>
              <div class="slct">
            <label >
               <input type="radio" name="books-vote">
              <span class="radio-custom"></span>
            </label>
            

            <div class="votes">
               <div class="votes-cur" style="max-width: 50%;">
            </div></div>
            <div class="vote-book-name">"Десять Нергитят"</div>

         </div>
              <div class="slct">
   <label >
               <input type="radio" name="books-vote">
              <span class="radio-custom"></span>
            </label>
            

            <div class="votes">
               <div class="votes-cur" style="max-width: 80%;">
            </div></div>
            <div class="vote-book-name">"Война и мир"</div>

         </div>
              <div class="slct">
           <label >
               <input type="radio" name="books-vote">
              <span class="radio-custom"></span>
            </label>
            

            <div class="votes">
               <div class="votes-cur" style="max-width: 20%;">
            </div></div>
            <div class="vote-book-name">" Ұшқан ұя"</div>

         </div>
      </div>
   </div>
</template>

<script setup>
</script>

<style scoped>
.books-l{
      display: flex;
      margin-top: 50px;
      flex-direction: column;
      gap: 10px;
      color: white;
      margin-left: 50px;
      
   }
   .slct{
      display: flex;
      align-items: center;
      gap: 10px;
   }
   .slct input{
      background-color: #333333;
   }
   .votes{
      width: 300px;
      background-color: #333333;
      height: 15px;
      border-radius: 10px;
   }
      .vote-book-name{
         font-size: 16px;
      }
      .votes-cur{
         height: 100%;
         background-color: #F2C655;
         border-radius: 10px;
         animation: fillAnimate 2s forwards;
      }

       input[type="radio"] {
    display: none;
  }
  .radio-custom {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: inline-block;
    background-color: #333;
    position: relative;
  }
   input[type="radio"]:checked + .radio-custom {
    background-color: #A0E75A;
  }
  .radio-custom::after {
    content: "";
    width: 9px;
    height: 4px;
    border: solid #333;
    border-width: 0 2px 2px 0;
    border-radius: 1px;
    display: none;
    position: absolute;
    top: 5px;
    left: 4px;
    transform: rotate(45deg);
    
  }
  input[type="radio"]:checked + .radio-custom::after {
    display: block;
    border-color: #333;
  }


  @keyframes fillAnimate{
   from{
      width: 0;
   }
   to{
      width: 100%;
   }
  }

</style>