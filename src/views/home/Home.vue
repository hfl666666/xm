<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">加油,冲冲冲</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banner"></home-swiper>
    <!-- 推荐图 -->
    <home-recommer :recommends="recommend"></home-recommer>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from './homeChild/HomeSwiper'
import HomeRecommer from './homeChild/HomeRecommend'

import {getHomeMultidata} from "../../network/home/home";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommer
  },
  created() {
    //1.请求多个数据
       getHomeMultidata().then((res) => {
        //  this.result = res
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list;

       })
      
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>