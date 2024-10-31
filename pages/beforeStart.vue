<template>
   <div class="teams">
  <div class="teams-head">
   <div class="head-con">
      <div class="texts">
         <h3>Write ID or Scan the QR</h3>
         <h2>7823651</h2>
      </div>
      <div class="img"></div>
   </div>
  </div>
  <div class="teams-center">
   <div class="quant"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 16.25C18.75 22.4525 23.7975 27.5 30 27.5C36.2025 27.5 41.25 22.4525 41.25 16.25C41.25 10.0475 36.2025 5 30 5C23.7975 5 18.75 10.0475 18.75 16.25ZM50 52.5H52.5V50C52.5 40.3525 44.6475 32.5 35 32.5H25C15.35 32.5 7.5 40.3525 7.5 50V52.5H50Z" fill="white"/>
</svg>
 4</div>
   <ul class="par-teams" style="list-style: none;">
      <li>Hack hack IT</li>
      <li>out of box</li>
      <li>PORORO</li>
      <li>Mal</li>
      <li>Teachers</li>
      <li>Abi and abla </li>
      <li>Students</li>
   </ul>
   <div class="timer">30</div>
  </div>
   </div>
</template>

<script>
  
</script>

<style scoped>
   .teams {
      height: 100vh;
      width: 100%;
      background-color: #222222;
      padding: 50px;
      list-style: none;
   }
   .teams-head {
      width: 100%;
      display: flex;
      justify-content: center;
      color: white;
   }
   .head-con{
      display: flex;
      background-color: #333333;
      width: 600px;
      justify-content: space-between;
      align-items: center;
      padding-left: 30px;
   }
   .texts{
      display: flex;
      gap: 20px;
      flex-direction: column;
   }
   .texts h3{
      font-size: 30px;
      font-weight: 500;
   }
   .texts h2 {
      font-size: 55px;
      font-weight: 700;
      text-align: right;
   }
   .img{
      height: 125px;
      width: 125px;
      background-image: url('../assets/img/qr-code.svg');
      background-color: white;
      background-size: cover;
   }

   .teams-center{
      margin-top: 30px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
   }
   .quant{
      padding: 10px;
      height: 50px;
      font-size: 30px;
      background-color: #FF7F42;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      color: white;
   }
   .quant svg {
      width: 30px;
      height: 30px;
   }
   .par-teams{
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
   }
   .par-teams li {
      font-size: 30px;
      font-weight: 600;
      padding: 5px 10px 5px 10px;
      background-color: #FF7F42;
      color: white;
      margin: 15px;
   }
   .timer{
      padding: 20px;
      border-radius: 50%;
      background-color: #FF7F42;
      font-weight: 600;
      font-size: 30px;
      color: white;
   }
</style>