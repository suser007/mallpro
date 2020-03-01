<template>
    <div id="tab-controller">
      <div class="tab-controller-item" v-for="(item,index) in tabcontroller">
        <span :class="{isRed:index === currentIndex}" @click="itemClick(index)">{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabController",
      data(){
        return{
          currentIndex: 0
        }
      },
      props:{
        tabcontroller: {
          type: Array,
          default(){
            return []
          }
        }
      },
      methods:{
        itemClick(index){
          this.currentIndex = index
        }
      }
    }
</script>

<style scoped>
  #tab-controller{
    display: flex;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 300;
    height: 40px;
    line-height: 40px;

    position: sticky;
    top: 48px;
    background: #f5f6fa;

  }
  .tab-controller-item{
    flex: 1;
  }
  .isRed{
    color: red;
    border-bottom: 3px solid red;
    padding-bottom: 6px;
  }
</style>
