<template>
  <div class="page">
    <img src="/images/characters.png" alt="characters" class="characterImg" >
  <SideBar/>
  </div>
</template>

<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
</script>

<style scoped>
.page{
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;
  display: flex;
  background-image: url(/images/background.jpg);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
}

.characterImg{
  position: absolute;
  left: 8%;
  bottom: 0;
  width: 48%;
}

</style>
