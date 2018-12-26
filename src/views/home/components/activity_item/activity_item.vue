<template>
  <li class="hot-item">
    <p class="item-img"></p>
    <p class="item-title">WOOY艺术展</p>
    <p class="item-summary">上海浦东区mall广场</p>
    <p class="item-stat">
      10.16-10.26
      <span class="fr">免费</span>
    </p>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ActivityItem extends Vue {}
</script>

<style lang="scss" scoped>
.hot-item {
  width: 50%;
  text-align: left;
  .item-img {
    display: inline-block;
    width: 3.2rem;
    height: 2.8rem;
    border-radius: 0.1rem;
    background-color: #ccc;
  }
  .item-title {
    font-weight: bold;
    font-size: 0.3rem;
    color: #333;
  }
  .item-summary {
    margin: 0.1rem 0rem;
    padding: 0.1rem 0rem;
    font-size: 0.26rem;
    color: #666;
  }
  .item-stat {
    padding-right: 0.3rem;
    font-size: 0.26rem;
    color: #151515;
    span {
      color: #fc4a50;
    }
  }
}
</style>

