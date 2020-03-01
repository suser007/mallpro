<template>
    <div id="home-recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "HomeRecommend",
      props:{
          recommends: Array
      }
    }
</script>

<style scoped>
  #home-recommend{
    display: flex;
    margin-top: 10px;
    border-bottom: 9px solid #f1f2f6;
    padding-bottom: 13px;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item a{
    color: #666666;
    text-decoration: none;
    font-size: 13px;
  }
  .recommend-item img{
    margin-bottom: 5px;
    height: 72px;
    width: 72px;
  }
</style>
