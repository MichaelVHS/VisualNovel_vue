<template>
  <div class="page">
  <div class="main_img">
  </div>
  <SideBar/>
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
.main_img{
  height: 100vh;
  width: 80%;
  background-color: #bdbdbd;
}
</style>
<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
</script>