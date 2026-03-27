<template>
<div class="page">
  <div class="novel">
    <GamePageVnPlayer />
    <RouterLink to="/" class="game_text">Назад</RouterLink>
  </div>
</div>
</template>

<script setup>
import GamePageVnPlayer from '../components/GamePageVNPlayer.vue'
</script>

<style scoped>
  .page{
    margin: 0;
    display: flex;
    position: absolute;
    inset: 0;
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
    top: 0;
    position: absolute;
    margin: 20px;
    font-size: 40px;
    color: white;
  }

</style>