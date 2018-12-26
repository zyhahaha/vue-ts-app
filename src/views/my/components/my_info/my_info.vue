<template>
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
</template>

<script lang="ts">
import MyInfo from './my_info_ctrl';
export default MyInfo;
</script>

<style lang="scss" scoped>
.my-info {
  margin-bottom: 0.28rem;
  padding-bottom: 0.14rem;
  text-align: center;
  background-color: #000;
  font-size: 0.28rem;
  color: #fff;
  .info {
    padding-top: 1rem;
  }
  .avatar-img {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: #ccc;
  }
  .nickname {
    margin-bottom: 0.14rem;
  }
  .count {
    margin-top: 0.14rem;
    .gap {
      display: inline-block;
      width: 0.92rem;
    }
  }
}
</style>

