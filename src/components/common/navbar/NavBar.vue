<template>
    <div id="navbar">
      <div id="left"><slot name="nav-left"></slot></div>
      <div id="center"><slot name="nav-center"></slot></div>
      <div id="right"><slot name="nav-right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  #navbar{
    display: flex;
    height: 48px;
    line-height: 48px;
    text-align: center;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }
  #left,#right{
    width: 58px;
  }
  #center{
    flex: 1;
  }
</style>
