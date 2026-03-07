<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped>
.app{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to left, var(--bg-color-left) 0%, var(--bg-color-left) 50%, var(--bg-color-right) 50%,  var(--bg-color-right) 100%);
}

</style>