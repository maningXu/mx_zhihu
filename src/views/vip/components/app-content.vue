<template>
  <div class="app-content">
    <div class="app-commodity">
      <ranking-list />
      <super-star-list />
      <recommend-feed />
    </div>
    <div class="app-myshelf">
      <app-myshelf />
    </div>
  </div>
</template>

<script>
import RankingList from './ranking-list.vue'
import SuperStarList from './super-star-list.vue'
import RecommendFeed from './recommend-feed.vue'
import AppMyshelf from './app-myshelf.vue'
export default {
  components: {
    'ranking-list': RankingList,
    'super-star-list': SuperStarList,
    'recommend-feed': RecommendFeed,
    'app-myshelf': AppMyshelf
  }
}
</script>

<style scoped>
.app-content {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 30px;
  width: 1130px;
}
.app-commodity {
  width: 829px;
}
.app-myshelf {
  width: 280px;
}
</style>
