<template>
  <div class="my">
    <div class="header">
      <!-- <img class="back fl" src="@/assets/my/ico-back.png" alt=""> -->
      <img class="seting fr" src="@/assets/my/seting.png" alt="">
    </div>
    <!-- info -->
    <MyInfo></MyInfo>
    <!-- content -->
    <Content></Content>
    <!-- footer -->
    <TabBar></TabBar>
  </div>
</template>

<script lang="ts">
  import My from './my';
  export default My;
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>

