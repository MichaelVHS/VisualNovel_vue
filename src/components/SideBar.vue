<template>
  <div class="menu">
    <img src="/stick.png" alt="stick" class="barSeparator" draggable="false">
    <div class="content">
      <RouterLink to="/game" class="main_text">Играть</RouterLink>
      <RouterLink to="/saves" class="main_text">Сохранения</RouterLink>
      <RouterLink to="/settings" class="main_text">Настройки</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.menu{
  display: flex;
}
.content{
  position: absolute;
  z-index: 99;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 20%;
}
.main_text{
  font-family: Gabriola, sans-serif;
  font-size: 50px;
  color: #abb6e4;
  text-decoration: none;
  -webkit-text-stroke: 8px #0f1537;
  paint-order: stroke fill;
}
.barSeparator{
  height: 100%;
  position: absolute;
  left: 70%
}
.main_text:hover{
  color: white;
}
</style>
<script setup lang="ts">
</script>