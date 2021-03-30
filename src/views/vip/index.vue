<template>
  <div class='vip'>
    <menu-bar />
    <app-content />
  </div>
</template>

<script>
import MenuBar from './components/menu-bar.vue'
import AppContent from './components/app-content.vue'

export default {
  components: {
    'menu-bar': MenuBar,
    'app-content': AppContent
  },
  data: function() {
    return {}
  },
  mounted: function() {
    document.title = '会员 - 知乎'
  }
}
</script>

<style scoped></style>