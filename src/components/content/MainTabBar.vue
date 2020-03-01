<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon-active" src="~assets/img/tarbar/homeing.svg" alt="">
        <img slot="item-icon" src="~assets/img/tarbar/home.svg" alt="333">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/kind">
        <img slot="item-icon-active" src="~assets/img/tarbar/kinding.svg" alt="">
        <img slot="item-icon" src="~assets/img/tarbar/kind.svg" alt="333">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shop">
        <img slot="item-icon-active" src="~assets/img/tarbar/shpping.svg" alt="">
        <img slot="item-icon" src="~assets/img/tarbar/shop.svg" alt="333">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/mine">
        <img slot="item-icon-active" src="~assets/img/tarbar/mineing.svg" alt="">
        <img slot="item-icon" src="~assets/img/tarbar/mine.svg" alt="333">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../common/tabbar/TabBar";
  import TabBarItem from "../common/tabbar/TabBarItem";
    export default {
      name: "MainTabBar",
      components:{
        TabBarItem,
        TabBar
      }
    }
</script>

<style scoped>

</style>
