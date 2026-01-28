<template>
  <body>
  <div class="main_img">
  </div>
  <div class="menu">
    <router-link to="/game" class="main_text">Играть</router-link>
    <router-link to="/saves" class="main_text">Сохранения</router-link>
    <router-link to="/settings" class="main_text">Настройки</router-link>
  </div>
  </body>
</template>

<script setup lang="ts">
</script>

<style scoped>
body{
  margin: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.main_img{
  height: 100vh;
  width: 80%;
  background-color: #bdbdbd;
}
.menu{
  display: flex;
  background-color: #5c5c5c;
  flex: 1 0 0;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.main_text{
  font-size: 25px;
  color: white;
}
</style>