<script lang="ts" setup>

</script>

<template>
    <div class="body">
        <section class="sidebar">
            <main class="icons">
                <Icon class="icon" name="uil:copy" style="color: white" />
                <Icon class="icon" name="uil:trash-alt" style="color: white" />
            </main>
            <main class="questions">
                <div class="container">
                    <div class="first">
                        <p>Type your question</p>
                        <Icon class="icon" name="uil:image" style="color: white" />
                    </div>
                    <div class="dashed-grid">
                        <div class="dashed-box"></div>
                        <div class="dashed-box"></div>
                        <div class="dashed-box"></div>
                        <div class="dashed-box"></div>
                    </div>
                </div>
                <button class="btn">Add question</button>
            </main>
        </section>
        
    </div>
</template>

<style scoped>
.body{
    color: white;
}
    .sidebar{
        margin-top: 50px;
        display: flex;
        width: 100%;
        column-gap: 10px;
        align-items: center;
    } 
    .icon{
        font-size: 25px;
        cursor: pointer;
    }
    .icons{
        display: flex;
        flex-direction: column;
    }
    .first{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    .questions{
        display: flex;
        flex-direction: column;
        row-gap: 12px;
    }
    .container{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        background-color: #333333;
        border-radius: 18px;
        padding: 16px;
    }
    .dashed-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 10px;
    }

    .dashed-box {
        width: 80px; 
        height: 26px; 
        border: 2px dashed #ffffff;
        border-radius: 8px;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: none;
        font-weight: 700;
        font-size: 18px;
        color: white;
        background: linear-gradient(45deg, #ff6600, #ffcc33);
        cursor: pointer;
    }
</style>
