<template>
  <div class="home">
    <div class="search">
      <p class="fl">上海</p>
      <div class="search-input fl">
      </div>
    </div>
    <!-- nav -->
    <div class="nav-wrap">
      <ul class="nav-list">
        <li class="nav-item fl" :class="{check: nav.code === 'a'}" :key="key" v-for="(nav, key) in navList">{{nav.name}}</li>
      </ul>
    </div>
    <!-- banner -->
    <div class="banner">
      <!-- <img src="" alt=""> -->
      <p class="banner-img"></p>
    </div>
    <!-- hot city -->
    <div class="city-hot">
      <div class="hot-title">
        <h4 class="fl">同城热门</h4>
        <span class="more fr">更多</span>
      </div>
      <!-- item -->
      <ul class="hot-list">
        <ActivityItem :key="key" v-for="(item, key) in activityList" :item="item"></ActivityItem>
      </ul>
    </div>
    <!-- footer -->
    <TabBar></TabBar>
  </div>
</template>

<script lang="ts">
  import Home from './home';
  export default Home;
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>

