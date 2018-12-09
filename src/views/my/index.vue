<template>
  <div class="my">
    <div class="header">
      <img class="back fl" src="@/assets/my/ico-back.png" alt="">
      <img class="seting fr" src="@/assets/my/seting.png" alt="">
    </div>
    <!-- info -->
    <div class="my-info">
      <div class="info">
        <p class="avatar-img"></p>
        <p class="nickname">瞌睡</p>
        <p>江苏 &nbsp; 男</p>
        <p>简介：素食主义者</p>
        <p class="count">
          <span>关注 121</span>
          <span class="gap"></span>
          <span>粉丝 774</span>
        </p>
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div class="my-order">
        <h4>我的订单</h4>
        <ul>
          <li>
            <img src="@/assets/my/ico-pay.png" alt="">
            <br/>
            <span>待支付</span>
          </li>
          <li>
            <img src="@/assets/my/ico-consumption.png" alt="">
            <br/>
            <span>待消费</span>
          </li>
          <li>
            <img src="@/assets/my/ico-refund.png" alt="">
            <br/>
            <span>待退款</span>
          </li>
        </ul>
      </div>
      <div class="my-community">
        <h4>我的社区</h4>
        <ul>
          <li>
            <img src="@/assets/my/ico-release.png" alt="">
            <br/>
            <span>发布</span>
          </li>
          <li>
            <img src="@/assets/my/like.png" alt="">
            <br/>
            <span>点赞</span>
          </li>
          <li>
            <img src="@/assets/my/ico-collect.png" alt="">
            <br/>
            <span>收藏</span>
          </li>
        </ul>
      </div>
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

