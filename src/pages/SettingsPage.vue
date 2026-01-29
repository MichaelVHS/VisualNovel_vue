<template>
  <div class="page">
  <div class="novel">
    <RouterLink to="/" class="game_text">Назад</RouterLink>
  </div>
  </div>
</template>

<style scoped>
.page{
  margin: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.novel{
  display: flex;
  background-color: darkolivegreen;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
}
.game_text{
  margin: 20px;
  font-size: 25px;
  color: white;
}
</style>