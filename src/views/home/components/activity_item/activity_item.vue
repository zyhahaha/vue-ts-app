<template>
  <li class="hot-item">
    <p class="item-img"></p>
    <p class="item-title">{{item.title}}</p>
    <p class="item-summary">{{item.summary}}</p>
    <p class="item-stat">
      {{item.item}}
      <span class="fr">{{item.statCost}}</span>
    </p>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class ActivityItem extends Vue {
  @Prop({default: {}})
  item!: object;
}
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

