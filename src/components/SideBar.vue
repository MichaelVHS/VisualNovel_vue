<template>
  <div class="menu">
    <RouterLink to="/game" class="main_text">Играть</RouterLink>
    <RouterLink to="/saves" class="main_text">Сохранения</RouterLink>
    <RouterLink to="/settings" class="main_text">Настройки</RouterLink>
  </div>
</template>
<style scoped>
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