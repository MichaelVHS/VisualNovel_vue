<template>
  <div class="page">
  <div class="containers">
    <div class="container" v-for="i in 8" :key="i"></div>
  </div>
  <RouterLink to="/" class="saves_text">Назад</RouterLink>
  </div>
</template>

<style scoped>
*{
  box-sizing: border-box;
}

html{
  height: 100%;
  width: 100%;
}

.page {
  margin: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.containers {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  background-color: darkolivegreen;
  padding: 40px;
}
.container {
  width: 300px;
  height: 200px;
  background-color: black;
}
.saves_text {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  font-size: 25px;
  color: white;
}
</style>
<script setup lang="ts">
</script>