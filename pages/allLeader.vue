<template>
   <div class="leader">
      <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th style="border-top-left-radius: 20px;">Place</th>
                    <th>Team name</th>
                    <th>Last gamePoints</th>
                    <th>Winrate</th>
                    <th style=" border-top-right-radius: 20px;">Overall Points</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>Kuka x2</td><td>11</td><td>1</td><td>63</td></tr>
                <tr><td>2</td><td>Pythons</td><td>12</td><td>2</td><td>61</td></tr>
                <tr><td>3</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>4</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>5</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>6</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>7</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>8</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>9</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>10</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td>11</td><td>Leaders</td><td>17</td><td>3</td><td>60</td></tr>
                <tr><td style="border-bottom-left-radius: 20px; border: 0;">15</td><td style="border-bottom: 0;">Leaders</td><td style="border-bottom: 0;">17</td><td  style="border-bottom: 0;">3</td><td style="border-bottom-right-radius: 20px; border: 0;">60</td></tr>
            </tbody>
        </table>
    </div>
    <button>Edit</button>
   </div>
   
</template>

<script>
   definePageMeta({
      layout: 'main'
   })
</script>

<style scoped>
.leader{
   display: flex;
   padding-top: 30px;
   height: 100%;
   gap: 20px;
   width: 100%;
   justify-content: center;
   align-items: flex-start;
   
}  
.leader button{
   cursor: pointer;
   height: 40px ; 
   width: 70px;
   font-size: 18px;
   border-radius: 20px;
   background-color: #F29D00;
   color: white ; 
   border: 0;
}

.table-container {
   width: 80%;
   border-radius: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
}

th, td {
    padding: 12px 15px;
    text-align: center;

}

th {
    background-color: #444444;
    color: #ffffff;
    font-weight: normal;
}


td {
    background-color: #1B1B1E;
    color: #ffffff;
}


 td {
    border-bottom: 1px solid #333333;
}
table{
   border-radius: 20px;
}
</style>