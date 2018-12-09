<template>
  <div class="my">
    <div class="search">
      <div class="search-input fl">
      <!-- <p class="push fl">+</p> -->
      </div>
    </div>
    <!-- nav -->
    <div class="nav">
      <ul class="nav-list">
        <li class="nav-item check">热门</li>
        <li class="nav-item">关注</li>
      </ul>
    </div>
    <!-- content -->
    <div class="content">
      test
    </div>
    <!-- footer -->
    <div class="tab-bar">
      <div class="tab-wrap">
        <p class="tab-home">
          <img src="@/assets/home/tab-ico-home-pre.png" alt="">
          <br/>
          首页
        </p>
        <p>
          <img src="@/assets/home/tab-ico-community-nor.png" alt="">
          <br/>
          社区
        </p>
        <p>
          <img src="@/assets/home/tab-ico-me-nor.png" alt="">
          <br/>
          我的
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import My from './my';
  export default My;
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>

