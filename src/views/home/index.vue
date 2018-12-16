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
        <li class="nav-item check fl">推荐</li>
        <li class="nav-item fl">展览</li>
        <li class="nav-item fl">演唱会</li>
        <li class="nav-item fl">活动</li>
        <li class="nav-item fl">DIY</li>
        <li class="nav-item fl">景点门票</li>
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
        <li class="hot-item">
          <p class="item-img"></p>
          <p class="item-title">WOOY艺术展 </p>
          <p class="item-summary">上海浦东区mall广场</p>
          <p class="item-stat">
            10.16-10.26
            <span class="fr">免费</span>
          </p>
        </li>
      </ul>
    </div>
    <!-- footer -->
    <div class="tab-bar">
      <div class="tab-wrap">
        <p class="tab-home">
          <img src="@/assets/home/tab-ico-home-pre.png" alt="">
          <br/>
          首页
        </p>
        <p @click="$router.push('community')">
          <img src="@/assets/home/tab-ico-community-nor.png" alt="">
          <br/>
          社区
        </p>
        <p @click="$router.push('my')">
          <img src="@/assets/home/tab-ico-me-nor.png" alt="">
          <br/>
          我的
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Home from './home';
  export default Home;
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>

