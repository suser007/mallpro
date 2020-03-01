<template>
    <div id="home">
      <nav-bar>
        <div id="left" slot="nav-left">left</div>
        <div id="center" slot="nav-center">蘑菇城</div>
        <div id="right" slot="nav-right">right</div>
      </nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends = recommends></home-recommend>
      <home-feature></home-feature>
      <tab-controller :tabcontroller="tabcontroller"></tab-controller>
      <ul>
        <li>3124</li>
        <li>515</li>
        <li>312</li>
        <li>6457</li>
        <li>5345</li>
        <li>63</li>
        <li>5</li>
        <li>534</li>
        <li>63</li>
        <li>42</li>
        <li>523</li>
        <li>623</li>
        <li>2431</li>
        <li>25236</li>
        <li>37347</li>
        <li>8485</li>
        <li>9696</li>
        <li>068</li>
        <li>756</li>
        <li>456</li>
        <li>42</li>
        <li>523</li>
        <li>623</li>
        <li>2431</li>
        <li>25236</li>
        <li>37347</li>
        <li>8485</li>
        <li>9696</li>
        <li>068</li>
        <li>756</li>
        <li>456</li>
        <li>42</li>
        <li>523</li>
        <li>623</li>
        <li>2431</li>
        <li>25236</li>
        <li>37347</li>
        <li>8485</li>
        <li>9696</li>
        <li>068</li>
        <li>756</li>
        <li>456</li>
        <li>42</li>
        <li>523</li>
        <li>623</li>
        <li>2431</li>
        <li>25236</li>
        <li>37347</li>
        <li>8485</li>
        <li>9696</li>
        <li>068</li>
        <li>756</li>
        <li>456</li>
        <li>42</li>
        <li>523</li>
        <li>623</li>
        <li>2431</li>
        <li>25236</li>
        <li>37347</li>
        <li>8485</li>
        <li>9696</li>
        <li>068</li>
        <li>756</li>
        <li>456</li>
      </ul>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import HomeSwiper from "./child/HomeSwiper";
  import HomeRecommend from "./child/HomeRecommend";
  import HomeFeature from "./child/HomeFeature";
  import TabController from "../../components/common/tabcontroller/TabController";
    export default {
      name: "Home",
      components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        HomeFeature,
        TabController
      },
      data(){
        return{
          banners: [
            {"acm":"3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg","link":"https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119","title":"焕新女装节","width":750,"width923":750},
            {"acm":"3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg","link":"https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119","title":"入秋穿搭指南","width":750,"width923":750},
            {"acm":"3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg","link":"https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119","title":"秋季护肤大作战","width":750,"width923":750},
            {"acm":"3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119","height":390,"height923":390,"image":"https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg","image923":"https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg","link":"https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119","title":"流行抢先一步","width":750,"width923":750}],
          recommends: [
            {"acm":"3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119","image":"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png","link":"http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119","sort":1,"title":"十点抢券"},
            {"acm":"3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119","image":"https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png","link":"https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119","sort":2,"title":"好物特卖"},
            {"acm":"3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119","image":"https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png","link":"http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119","sort":3,"title":"内购福利"},
            {"acm":"3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119","image":"https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png","link":"http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119","sort":4,"title":"初秋上新"}],
          tabcontroller: ['流行','新款','精选'],
        }
      },
      created() {
        getHomeMultidata().then(res => {
            console.log('request seccess');
            console.log(res);
            // this.banners = res.data.data.banner.list
            // this.recommends = res.data.data.recommend.list
        })
      }
    }
</script>

<style scoped>
  #home #left,#center,#right{
    background: #fd79a8;
    color: white;
  }
  #home{
    margin-top: 48px;
    margin-bottom: 49px;
  }
</style>
