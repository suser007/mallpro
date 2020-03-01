<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: "TabBar",
    }
</script>

<style scoped>
  #tab_bar{
    height: 49px;
    background: #dfe4ea;

    display: flex;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
</style>
