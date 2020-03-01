<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="item-icon-active"></slot>
    <slot v-else name="item-icon"></slot>
    <slot :class="{isRed:isActive}" name="item-text"></slot>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        link: String
      },
      methods:{
        itemClick(){
          console.log('itemClick');
          this.$router.push(this.link);
        }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.link) !== -1;
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 11px;
    font-weight: 200;

    box-shadow: 0 -1px #dfe6e9;
  }
  .tab-bar-item img{
    width: 25px;
    height: 25px;

    vertical-align: middle;
    margin-top: 4px;
    margin-bottom: 1px;
  }
  .isRed{
    color: #17abe3;
  }
</style>
