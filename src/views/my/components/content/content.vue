<template>
  <div class="my-content">
    <div class="my-order">
      <h4>我的订单</h4>
      <ul>
        <li>
          <img src="@/assets/my/ico-pay.png" alt>
          <br>
          <span>待支付</span>
        </li>
        <li>
          <img src="@/assets/my/ico-consumption.png" alt>
          <br>
          <span>待消费</span>
        </li>
        <li>
          <img src="@/assets/my/ico-refund.png" alt>
          <br>
          <span>待退款</span>
        </li>
      </ul>
    </div>
    <div class="my-community">
      <h4>我的社区</h4>
      <ul>
        <li>
          <img src="@/assets/my/ico-release.png" alt>
          <br>
          <span>发布</span>
        </li>
        <li>
          <img src="@/assets/my/like.png" alt>
          <br>
          <span>点赞</span>
        </li>
        <li>
          <img src="@/assets/my/ico-collect.png" alt>
          <br>
          <span>收藏</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import MyContent from './content_ctrl';
export default MyContent;
</script>

<style lang="scss" scoped>
.my-order, .my-community{
  padding: 0rem 0.46rem;
  margin-bottom: 0.90rem;
  h4{
    margin-bottom: 0.36rem;
    padding-left: 0.2rem;
    border-left: 2px solid #2FD3A4;
    text-align: left;
    font-size: 0.36rem;
  }
  ul{
    display: flex;
  }
  li{
    flex: 1;
    font-size: 0.3rem;
  }
  img{
    width: 0.68rem;
  }
}
</style>

