<template>
    <aside class="content">
      <img src="" alt="logo" class="logo">
      <nav class="main_text">
        <RouterLink to="/game" >Играть</RouterLink>
        <RouterLink to="/saves">Сохранения</RouterLink>
        <RouterLink to="/settings">Настройки</RouterLink>
      </nav>
    </aside>
</template>
<style scoped>
.content{
  position: absolute;
  z-index: 99;
  display: flex;
  height: 100dvh;
  right: 0;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  background: url(/stick.png) no-repeat left top;
  background-size: auto 100%;
}
.main_text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.main_text a{
  font-size: 0.4rem;
  color: var(--text-color);
  text-decoration: none;
  -webkit-text-stroke: 0.05rem var(--stroke-color);
  paint-order: stroke fill;
}
.main_text a:hover{
  color: var(--hover-color);
}
.logo{
  top:0;
  right:0;
  position: absolute;
  width: 1.5rem;
  height: 0.8rem;
  margin: 0.4rem 0.6rem 0 0;
}
</style>
<script setup lang="ts">
</script>