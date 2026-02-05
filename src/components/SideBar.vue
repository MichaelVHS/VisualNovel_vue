<template>
  <div class="menu">
    <img src="/stick.png" alt="stick" class="barSeparator noDragable" draggable="false">
    <div class="content">
      <div class="logo">
        Ночной факультатив
      </div>
      <RouterLink to="/game" class="main_text noDragable">Играть</RouterLink>
      <RouterLink to="/saves" class="main_text noDragable">Сохранения</RouterLink>
      <RouterLink to="/settings" class="main_text noDragable">Настройки</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.menu{
  display: flex;
}
.noDragable{
  -webkit-user-select: none;
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
.logo{
  top:0;
  right:0;
  position: absolute;
  font-family: Gabriola, sans-serif;
  width: 200px;
  height: 100px;
  background-color: #0f1537;
  color: white;
  font-size: 35px;
  margin: 50px;
}
</style>
<script setup lang="ts">
</script>