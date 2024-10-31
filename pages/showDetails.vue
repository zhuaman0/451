<template>
    <div class="admin-announce">
 <div class="ann-content">
    <div class="ann-h">
       <div class="year-all">YEAR : <span>2024</span> </div>
       <button class="plus">+</button>
    </div>

    <div class="container">
    <div class="left-panel">
        <div class="title">
            <span class="title">Title:</span>
            <div class="highlight">November Game</div>
        </div>
        <div class="date">
            <span class="title">Date:</span>
            <div class="highlight">29.09.2024</div>
        </div>
        <a href="#" class="start-button">Start Permanently</a>
    </div>
    <div class="right-panel">
        <h1 style="color: white;">Registered Teams: 34</h1>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Team name</th>
                    <th>Registered Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Kuka x2</td>
                    <td>12.10.2024 <span class="highlighted">13:15</span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Pythons</td>
                    <td>11.10.2024 <span class="highlighted">17:42</span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Leaders</td>
                    <td></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Leaders</td>
                    <td></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Leaders</td>
                    <td></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Leaders</td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <button class="edit-button">Edit</button>

                    </td>
                </tr>
            </tbody>
        </table>
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
 .container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 100px;
        width: 100%;
    }
    .left-panel {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 400px;
    }
    .title{
        font-size: 30px;
        color: white;
    }
    .highlight {
        font-size: 1.5rem;
        margin-top: 10px;
        color: white;
    }
    .start-button {
        display: inline-block;
        padding: 10px 20px;
        background: linear-gradient(90deg, #ff8c42, #ff5a3c);
        color: #ffffff;
        border: none;
        border-radius:58px;
        font-size: 1rem;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        margin-top: 10px;
        text-decoration: none;
    }
    .right-panel {
        text-align: center;
        width: 100%;
    }
    .right-panel h1 {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        background-color: #282828;
        color: #ffffff;
        border: 2px solid #666;
        border-radius: 8px;
        overflow: hidden;
    }
    th, td {
        padding: 15px;
        text-align: center;
        font-size: 1rem;
        border-bottom: 1px solid #333;
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
        padding: 8px 30px;
        background-color: #F29D00;
        color: #282828;
        border: none;
        border-radius: 55px;
        font-size: 0.9rem;
        cursor: pointer;
        text-decoration: none;
        color: white;
    }
 </style>
