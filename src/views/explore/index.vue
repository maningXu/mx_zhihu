<template>
  <div class="explore-homepage">
    <explore-special />
  </div>
</template>

<script>
import Special from './components/special'
export default {
  data: function() {
    return {}
  },
  mounted: function() {
    document.title = '发现 - 知乎'
  },
  components: {
    'explore-special': Special
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
