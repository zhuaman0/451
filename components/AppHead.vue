<template>
    <div>
        <header class="header">
        <img class="logo" src="../assets/img/logo-451.png" width="70">
            
        <nav class="nav">
            <a href="#" id="main">Main</a>
            <a href="#" id="about">About Us</a>
            <a href="#" id="rules">Rules</a>
            <a href="#" id="sign">Sign In</a>
        </nav>
    
        <div class="hamburger" id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
    
        <div class="mobile-nav" id="mobileNav">
            <a href="#" id="main">Main</a>
            <a href="#" id="about">About Us</a>
            <a href="#" id="rules">Rules</a>
            <a href="#" id="sign">Sign In</a>
        </div>
    </header>
    </div>
</template>

<style scoped>
    .header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: transparent;
        color: white;
        height: 100px;
        padding: 0 50px;
    }

    .nav {
        display: flex;
        gap: 35px;
    }

    .nav a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        font-weight: 600;
    }
    
    .nav a:hover {
        background-color: #555;
        border-radius: 4px;
    }

    .hamburger {
        display: none;
        cursor: pointer;
    }

    .hamburger div {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 4px;
    }

    .mobile-nav {
        display: none;
        flex-direction: column;
        background-color: #333;
        position: absolute;
        top: 60px;
        right: 0;
        width: 200px;
    }

    .mobile-nav a {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #555;
    }

    @media (max-width: 768px) {
    .nav {
        display: none;
    }

    .hamburger {
        display: block;
    }

    .mobile-nav {
        display: none;
    }

    .mobile-nav.active {
        display: flex;
    }
    }
</style>

<!-- <script setup>
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
</script> -->