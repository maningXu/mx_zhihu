<template>
  <div class="app-content">
    <div class="app-commodity">
      <ranking-list />
      <super-star-list />
      <recommend-feed />
    </div>
    <div class="app-myself"></div>
  </div>
</template>

<script>
import RankingList from './ranking-list.vue'
import SuperStarList from './super-start-list.vue'
import RecommendFeed from './recommend-feed.vue'
export default {
  components: {
    'ranking-list': RankingList,
    'super-star-list': SuperStarList,
    'recommend-feed': RecommendFeed
  }
}
</script>

<style scoped>
.app-content {
  margin: 0 auto;
  padding-top: 30px;
  width: 1130px;
  overflow: hidden;
}
.app-commodity {
  float: left;
  width: 829px;
}
.app-myself {
  float: right;
  width: 280px;
}
</style>
