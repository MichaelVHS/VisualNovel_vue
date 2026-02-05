<template>
  <div class="page">
    <img src="/characters.png" alt="characters" class="characterImg noDragable" draggable="false">
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
  background: url(/fon.jpg) no-repeat;
  background-size: cover;
}
.noDragable{
  -webkit-user-select: none;
}
.characterImg{
  margin-left: 150px;
}
</style>
<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
</script>