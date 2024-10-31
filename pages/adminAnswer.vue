<script setup>
definePageMeta({
    layout: 'small'
})
</script>

<template>
    <div class="body">
        <div class="link">
            <div >Questions</div>
            <div class="href">Answers</div>
        </div>
        <div class="container">
    <h1>Question 1</h1>
    <table>
        <tr class="first">
            <th>Index</th>
            <th>Team name</th>
            <th>Submit Time</th>
            <th>Answer</th>
            <th>Answer</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Kuka x2</td>
            <td>12.10.2024 <span class="highlighted">13:15</span></td>
            <td>mal</td>
            <td>mal</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Pythons</td>
            <td></td>
            <td>kniga</td>
            <td>kniga</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Leaders</td>
            <td></td>
            <td>aman</td>
            <td>aman</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Leaders</td>
            <td></td>
            <td>kaany</td>
            <td>kaany</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Leaders</td>
            <td></td>
            <td>kaneke</td>
            <td>kaneke</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Leaders</td>
            <td></td>
            <td>zhomeke</td>
            <td>zhomeke</td>
        </tr>
        
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>

                <button class="edit-button">Edit</button>
            </td>
        </tr>
    </table>
    
</div>
    </div>
</template>
<style scoped>
.body{
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
}

.link{
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:260px;
    height: 32px;
    background-color: #333333;
    color: white;
    border-radius: 50px;
    gap: 13px;
    transition: all 0.2s;
}

.href{
    width: 130px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #777777;
    border-radius: 50px;
}

.link div{
    font-size: 19px;
}

.first{
    background-color: #444444;
}

.first th{
    color: white;
}

.container {
    text-align: center;
    width: 80%;
}
h1 {
    font-size: 2rem;
    margin-bottom: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
    background-color: #282828;
    color: #ffffff;
    border: 2px solid #666;
    border-radius: 18px;
    overflow: hidden;
}
th, td {
    padding: 15px;
    text-align: center;
    font-size: 1rem;
    border-bottom: 1px solid #333;
    color: white;
}
th {
    font-weight: normal;
    color: #b2b2b2;
}
td {
    color: #ffffff;
}
.highlighted {
    color: #ff8c42;
}
.edit-button {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 40px;
    background-color: #F29D00;
    color: #ffffff;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
}

</style>
