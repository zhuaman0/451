<template>
   <div class="rules">
      <h2>Rules</h2>
      <div class="rules-main">
         <div class="rule">
            <div class="hexagon">
               <div class="hexagon-content">
                  1
               </div>
            </div>
            <div class="hexagon-extend">
               Create a team from 3 members
            </div>
         </div>
         <div class="rule" style="display: flex;justify-content: flex-end; " >
            <div class="hexagon-extend"  id="rule2" >
Read a book during the month            </div>
            <div class="hexagon">
               <div class="hexagon-content">
                  2
               </div>
            </div>
            
         </div>
         <div class="rule" >
            <div class="hexagon">
               <div class="hexagon-content">
                  3
               </div>
            </div>
            <div class="hexagon-extend">
Participate in the quiz and win <br> the prizes your team            </div>
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
   .rules{
      height: 100%;
      width: 100%;
      color: white;
            padding: 20px 150px 0 50px;
   }
   h2{
            font-size: 45px;
      font-weight: 500;
      display: block;
      margin-bottom: 30px;
   }
   .rules-main{
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: space-between;
   }
   .rule{
      display: flex ;
      align-items: center;
      
   }

.hexagon {
  position: relative;
  width: 150px;              /* Ширина увеличена в 1.5 раза */
  height: 86.61px;           /* Высота также увеличена (ширина * sqrt(3) / 2) */
  background-color: #DE793B; /* Основной цвет шестиугольника */
  margin: 43.3px 0;          /* Отступы увеличены в 1.5 раза */
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 75px solid transparent;  
  border-right: 75px solid transparent; 
}

.hexagon:before {
  bottom: 100%;                         
  border-bottom: 43.3px solid #DE793B;   
}

.hexagon:after {
  top: 100%;                            
  border-top: 43.3px solid #DE793B;     
}

.hexagon-content {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 80px;
   font-weight: 700;
  height: 100%;
}
.hexagon-extend {
  width: 400px;                     
  height: 85px;                    
  background-color: #444444;   
  display: flex;
  font-size: 23px;
  padding-left: 20px;
  justify-content: flex-start;
  align-items: center;   
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
}
#rule2{
  width: 400px;                     
  height: 85px;                                 /* Высота элемента */
  background-color: #444444;   
    display: flex;
    padding-left: 70px;
float: right;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%);
}
</style>