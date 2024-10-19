<template>
    <div class="body">
        <AppHead/>
        <slot/>
    </div>
</template>

<style scoped>
.body {
    background-color: #333;
    height: 100vh;
    width: 100%;
}
</style>