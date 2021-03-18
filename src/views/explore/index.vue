<template>
  <div class="explore-homepage">
    <explore-special />
    <round-table />
    <collection />
    <column />
    <explore-footer />
  </div>
</template>

<script>
import Special from './components/special.vue'
import RoundTable from './components/round-table.vue'
import Collection from './components/collection.vue'
import Column from './components/column.vue'
import ExploreFooter from './components/explore-footer.vue'
export default {
  data: function() {
    return {}
  },
  mounted: function() {
    document.title = '发现 - 知乎'
  },
  components: {
    'explore-special': Special,
    'round-table': RoundTable,
    collection: Collection,
    column: Column,
    'explore-footer': ExploreFooter
  }
}
</script>

<style scoped>
.explore-homepage {
  margin: 32px auto 107px;
  width: 1000px;
  padding: 0 16px;
}
</style>
